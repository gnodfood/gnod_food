import React, { useState, useMemo } from "react";
import { BLOG_POSTS } from "../data";
import { BlogPost } from "../types";
import {
  Calendar,
  Clock,
  User,
  X,
  ArrowRight,
  Share2,
  ThumbsUp,
  Newspaper,
  ChevronRight,
  TrendingUp,
  Award
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function NewsSection() {
  const [activePost, setActivePost] = useState<BlogPost | null>(null);
  const [likedPosts, setLikedPosts] = useState<Record<string, boolean>>({});

  // Filter out blog posts, keep ONLY news posts
  const newsPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => post.category === "Tin tức");
  }, []);

  const toggleLike = (postId: string) => {
    setLikedPosts((prev) => ({
      ...prev,
      [postId]: !prev[postId],
    }));
  };

  const handleShare = (post: BlogPost) => {
    const text = `Báo chí đưa tin về Gnod Food: "${post.title}"!`;
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: text,
        url: window.location.href,
      }).catch((err) => console.log(err));
    } else {
      navigator.clipboard.writeText(`${text} ${window.location.href}`);
      alert("Đã sao chép liên kết bài báo vào bộ nhớ tạm!");
    }
  };

  // Helper to parse "BÁO – TÊN BÀI VIẾT" and style the publisher name
  const parsePostTitle = (title: string) => {
    const parts = title.split(" – ");
    if (parts.length > 1) {
      return {
        publisher: parts[0],
        mainTitle: parts.slice(1).join(" – ")
      };
    }
    return {
      publisher: "Báo chí",
      mainTitle: title
    };
  };

  const getPublisherBadgeStyle = (publisher: string) => {
    const pub = publisher.toLowerCase();
    if (pub.includes("vnexpress")) {
      return "bg-[#73224B] text-white"; // VnExpress signature red-ish maroon
    }
    if (pub.includes("cafebiz")) {
      return "bg-[#002f5f] text-white"; // CafeBiz dark blue
    }
    if (pub.includes("kenh14")) {
      return "bg-[#f94d50] text-white"; // Kenh14 coral-red
    }
    if (pub.includes("zing")) {
      return "bg-[#1cc04c] text-white"; // Zing green
    }
    return "bg-[#0070f3] text-white";
  };

  return (
    <div className="w-full space-y-12">
      {/* Editorial press highlights bar */}
      <div 
        id="news-press-bar"
        className="max-w-5xl mx-auto bg-slate-100/50 border border-brand-blue-100 rounded-3xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs"
      >
        <div className="flex items-center space-x-3.5 text-left">
          <div className="p-3 bg-brand-blue-900 text-[#0070f3] rounded-2xl shadow-sm">
            <Newspaper className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-base font-display font-black text-brand-blue-900 tracking-tight">
              Báo Chí Nói Gì Về Gnod Food?
            </h4>
            <p className="text-xs text-slate-500 font-medium">
              Sự dịch chuyển thói quen ăn vặt lành mạnh và sức hút truyền thông số của khô cá đuối Gnod Sạch.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 justify-center">
          <span className="px-3.5 py-1.5 bg-white border border-slate-200 rounded-xl text-xs font-bold font-mono text-[#73224B] shadow-2xs">VnExpress</span>
          <span className="px-3.5 py-1.5 bg-white border border-slate-200 rounded-xl text-xs font-bold font-mono text-[#002f5f] shadow-2xs">CafeBiz</span>
          <span className="px-3.5 py-1.5 bg-white border border-slate-200 rounded-xl text-xs font-bold font-mono text-[#f94d50] shadow-2xs">Kenh14</span>
          <span className="px-3.5 py-1.5 bg-white border border-slate-200 rounded-xl text-xs font-bold font-mono text-[#1cc04c] shadow-2xs">Zing News</span>
        </div>
      </div>

      {/* Grid of news articles */}
      <div className="max-w-6xl mx-auto px-1">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {newsPosts.map((post, idx) => {
            const { publisher, mainTitle } = parsePostTitle(post.title);
            return (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                onClick={() => setActivePost(post)}
                className="group bg-white rounded-3xl overflow-hidden border border-brand-blue-100/50 shadow-sm hover:shadow-xl hover:border-brand-blue-100 transition-all duration-300 flex flex-col sm:flex-row cursor-pointer premium-hover-shine"
              >
                {/* News Image Header */}
                <div className="relative w-full sm:w-2/5 aspect-video sm:aspect-auto sm:min-h-[220px] overflow-hidden bg-slate-50 shrink-0">
                  <img
                    src={post.image}
                    alt={post.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className={`absolute top-4 left-4 text-[10px] uppercase font-black tracking-widest px-3 py-1 rounded-lg backdrop-blur-md shadow-sm ${getPublisherBadgeStyle(publisher)}`}>
                    {publisher}
                  </div>
                </div>

                {/* News content body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-3 text-left">
                    <div className="flex items-center space-x-3 text-[11px] text-slate-400 font-medium">
                      <span className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{post.date}</span>
                      </span>
                      <span className="w-1 h-1 bg-slate-300 rounded-full" />
                      <span className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime} đọc</span>
                      </span>
                    </div>

                    <h3 className="font-display font-extrabold text-base text-brand-blue-900 leading-snug group-hover:text-[#0070f3] transition-colors line-clamp-3">
                      {publisher} – <span className="font-normal text-slate-700">{mainTitle}</span>
                    </h3>

                    <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">
                      {post.summary}
                    </p>
                  </div>

                  {/* Read Article bar */}
                  <div className="flex items-center justify-between pt-3.5 border-t border-slate-100 text-[11.5px] text-[#0070f3] font-display font-black tracking-wider uppercase">
                    <span className="flex items-center space-x-1 text-slate-400 normal-case font-medium">
                      <User className="w-3 h-3 text-slate-300" />
                      <span>phóng viên {post.author}</span>
                    </span>
                    <span className="flex items-center space-x-1 group-hover:translate-x-1 transition-transform">
                      <span>Đọc bài báo</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      {/* Reader Drawer Modal */}
      <AnimatePresence>
        {activePost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-hidden">
            {/* Overlay backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActivePost(null)}
              className="fixed inset-0 bg-brand-blue-900/40 backdrop-blur-sm"
            />

            {/* Immersive Drawer Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col z-10"
            >
              {/* Toolbar Drawer Head */}
              <div className="absolute top-4 right-4 z-20">
                <button
                  onClick={() => setActivePost(null)}
                  className="p-1.5 rounded-full bg-black/45 backdrop-blur-md text-white hover:bg-[#0070f3] transition-all cursor-pointer shadow-md"
                >
                  <X className="w-4.5 h-4.5" />
                </button>
              </div>

              {/* Scrollable Document Container */}
              <div className="overflow-y-auto flex-1">
                {/* Beautiful Banner */}
                <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-slate-100">
                  <img
                    src={activePost.image}
                    alt={activePost.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent" />
                  
                  {/* Text Overlay */}
                  <div className="absolute bottom-5 sm:bottom-8 left-5 sm:left-8 right-5 sm:right-8 text-left space-y-2.5">
                    <span className={`inline-block text-[10.5px] uppercase font-black tracking-widest px-3 py-1 rounded-lg backdrop-blur-md shadow-sm ${getPublisherBadgeStyle(parsePostTitle(activePost.title).publisher)}`}>
                      {parsePostTitle(activePost.title).publisher}
                    </span>
                    <h2 className="font-display font-bold text-xl sm:text-3xl text-white leading-tight drop-shadow-md">
                      {activePost.title}
                    </h2>
                    
                    <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300">
                      <span className="flex items-center space-x-1.5">
                        <User className="w-3.5 h-3.5 text-slate-400" />
                        <span>Bài viết bởi {activePost.author}</span>
                      </span>
                      <span className="hidden sm:inline">•</span>
                      <span className="flex items-center space-x-1.5">
                        <Calendar className="w-3.5 h-3.5 text-slate-400" />
                        <span>Đăng ngày: {activePost.date}</span>
                      </span>
                      <span className="hidden sm:inline">•</span>
                      <span className="flex items-center space-x-1.5">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        <span>Ước tính đọc: {activePost.readTime}</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Document Body */}
                <div className="p-6 sm:p-10 space-y-8 text-left">
                  {/* Article summary */}
                  <div className="border-l-4 border-[#0070f3] pl-4 py-1 italic text-slate-600 text-sm leading-relaxed bg-[#0070f3]/5 rounded-r-xl">
                    "{activePost.summary}"
                  </div>

                  {/* Render paragraphs cleanly */}
                  <div className="space-y-6 text-slate-700 text-sm sm:text-base leading-relaxed font-sans font-normal border-b border-slate-100 pb-8">
                    {activePost.content.map((para, idx) => (
                      <p key={idx} className="indent-4 leading-loose">{para}</p>
                    ))}
                  </div>

                  {/* Metadata SEO & Social Integration Cards */}
                  <div className="space-y-6">
                    {/* SEO Key Words Badges */}
                    <div className="space-y-2">
                      <h4 className="text-xs font-display font-bold text-slate-400 uppercase tracking-widest flex items-center space-x-1">
                        <Award className="w-3.5 h-3.5" />
                        <span>Nguồn tin cậy & Chủ đề liên quan:</span>
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {activePost.tags.map((k, idx) => (
                          <span
                            key={idx}
                            className="text-[10px] font-mono bg-slate-100 text-slate-700 border border-slate-200 rounded px-2.5 py-0.5 uppercase font-medium"
                          >
                            {k}
                          </span>
                        ))}
                        {activePost.primaryKeywords.map((k, idx) => (
                          <span
                            key={idx}
                            className="text-[10px] font-mono bg-emerald-50 text-emerald-800 border border-emerald-100 rounded px-2.5 py-0.5"
                          >
                            {k}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Interactive Action Bar */}
                    <div className="bg-slate-50 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <div className="flex items-center space-x-3.5">
                        <button
                          onClick={() => toggleLike(activePost.id)}
                          className={`flex items-center space-x-2.5 px-4.5 py-2.5 rounded-xl text-xs font-display font-bold transition-all border cursor-pointer ${
                            likedPosts[activePost.id]
                              ? "bg-rose-50 border-rose-200 text-rose-600 scale-95"
                              : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
                          }`}
                        >
                          <ThumbsUp className={`w-4 h-4 ${likedPosts[activePost.id] ? "fill-rose-500 stroke-rose-600" : ""}`} />
                          <span>{likedPosts[activePost.id] ? "Đã thích tin tức" : "Đánh giá tin hay"}</span>
                        </button>

                        <button
                          onClick={() => handleShare(activePost)}
                          className="flex items-center space-x-2 px-4.5 py-2.5 rounded-xl text-xs font-display font-bold bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 cursor-pointer transition-all"
                        >
                          <Share2 className="w-4 h-4 text-slate-500" />
                          <span>Chia sẻ liên kết</span>
                        </button>
                      </div>

                      {/* Connect Social Links of the Group */}
                      <div className="flex items-center space-x-3">
                        <span className="text-[11px] text-slate-400 font-display font-medium uppercase tracking-wider">Gnod Food Social:</span>
                        <div className="flex items-center gap-2">
                          <a
                            href="https://www.facebook.com/share/14XrZY1ZVLU/?mibextid=wwXIfr"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full bg-[#1877F2]/10 hover:bg-[#1877F2] text-[#1877F2] hover:text-white transition-all shadow-sm"
                            title="Facebook Gnod Food"
                          >
                            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                            </svg>
                          </a>
                          <a
                            href="https://www.tiktok.com/@gnodfood?_r=1&_t=ZS-96n3kU95xlU"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full bg-black/5 hover:bg-black text-black hover:text-white transition-all shadow-sm"
                            title="TikTok Gnod Food"
                          >
                            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.86-.74-3.94-1.74-.22-.22-.4-.47-.58-.73v7.24c.01 5.26-4.27 9.52-9.52 9.52-5.26-.01-9.52-4.29-9.51-9.55C-.11 9.38 4.25 5.08 9.55 5.1c0 1.34-.01 2.68-.01 4.02-3.01-.13-5.56 2.13-5.71 5.14-.17 3.29 2.44 6.13 5.73 6.15 3.19.02 5.86-2.5 5.92-5.69.02-4.9-.01-9.8-.01-14.7z" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Related/Footer Navigation */}
              <div className="bg-slate-50 px-6 sm:px-10 py-5 border-t border-slate-100 flex justify-between items-center text-xs">
                <span className="text-slate-400 font-medium">Bản quyền thuộc về Gnod Food</span>
                <button
                  onClick={() => setActivePost(null)}
                  className="font-display font-medium text-brand-blue-700 hover:text-[#0070f3] flex items-center space-x-1 cursor-pointer"
                >
                  <span>Quay lại trang chủ</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
