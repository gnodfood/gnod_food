import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { RECIPES } from "../recipesData";
import { PRODUCTS } from "../data";
import { Recipe, Product } from "../types";
import {
  Clock,
  Flame,
  Check,
  ShoppingBag,
  Sparkles,
  BookOpen,
  Utensils,
  ChevronRight,
  TrendingUp,
  Award,
  Heart,
  Share2,
  Printer,
  Refrigerator
} from "lucide-react";

interface RecipesSectionProps {
  onAddToCart: (product: Product, qty?: number) => void;
}

export default function RecipesSection({ onAddToCart }: RecipesSectionProps) {
  const [selectedRecipeId, setSelectedRecipeId] = useState<string>(RECIPES[0].id);
  const [checkedIngredients, setCheckedIngredients] = useState<Record<string, boolean>>({});
  const [activeStep, setActiveStep] = useState<number>(1);
  const [lovedRecipes, setLovedRecipes] = useState<Record<string, boolean>>({});
  const [copiedLink, setCopiedLink] = useState<boolean>(false);
  const [printed, setPrinted] = useState<boolean>(false);

  const recipe = RECIPES.find((r) => r.id === selectedRecipeId) || RECIPES[0];

  // Map product from PRODUCTS based on recipe.productUsed.id
  const matchedProduct = PRODUCTS.find((p) => p.id === recipe.productUsed.id);

  const toggleIngredient = (ingredient: string) => {
    setCheckedIngredients((prev) => ({
      ...prev,
      [ingredient]: !prev[ingredient]
    }));
  };

  const resetIngredients = () => {
    setCheckedIngredients({});
  };

  const toggleLove = (id: string) => {
    setLovedRecipes((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleShare = () => {
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const handlePrint = () => {
    setPrinted(true);
    setTimeout(() => {
      setPrinted(false);
      window.print();
    }, 1000);
  };

  return (
    <section id="recipes" className="py-24 bg-white border-b border-brand-blue-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div id="recipe-header" className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e6f4fe] text-[#0070f3] text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Góc Ẩm Thực Nhà Gnod</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-brand-blue-900 tracking-tight">
            CÔNG THỨC CHẾ BIẾN THƯỢNG HẠNG
          </h2>
          <div className="w-16 h-1.5 bg-[#0070f3] mx-auto rounded-full" />
          <p className="text-gray-600 text-base sm:text-lg font-normal">
            Bật mí tinh hoa ẩm thực từ các đầu bếp hàng đầu. Chế biến các món ngon di sản chuẩn vị, tiện lợi ngay tại nhà bằng nguồn hải sản khô Organic tinh khiết nhà Gnod Food.
          </p>
        </div>

        {/* Recipe Tabs & Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Quick Select Tabs & Briefing */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-[#faf9f6] p-4 rounded-2xl border border-brand-blue-100/40 shadow-sm">
              <h3 className="font-display font-bold text-lg text-brand-blue-900 px-2 mb-3 flex items-center gap-2 select-none">
                <Utensils className="w-4.5 h-4.5 text-[#0070f3]" />
                <span>Danh sách món ngon</span>
              </h3>
              <div className="space-y-2">
                {RECIPES.map((r) => {
                  const isActive = r.id === selectedRecipeId;
                  return (
                    <button
                      key={r.id}
                      id={`tab-recipe-${r.id}`}
                      onClick={() => {
                        setSelectedRecipeId(r.id);
                        setActiveStep(1); // Reset step number
                      }}
                      className={`w-full text-left p-4 rounded-xl transition-all duration-300 relative flex items-start gap-3 group ${
                        isActive
                          ? "bg-[#103e69] text-white shadow-md transform translate-x-1"
                          : "bg-white hover:bg-[#e6f4fe]/30 hover:text-brand-blue-900 text-gray-700 border border-transparent hover:border-brand-blue-100/30"
                      }`}
                    >
                      <span
                        className={`text-xs px-2 py-0.5 rounded-md font-bold mt-0.5 whitespace-nowrap ${
                          isActive
                            ? "bg-white/20 text-white"
                            : "bg-[#e6f4fe] text-[#0070f3] group-hover:bg-[#0070f3] group-hover:text-white transition-colors"
                        }`}
                      >
                        {r.difficulty}
                      </span>
                      <div className="space-y-1">
                        <span className="font-display font-bold text-sm block leading-snug line-clamp-2">
                          {r.dishName}
                        </span>
                        <span
                          className={`text-xs block ${
                            isActive ? "text-brand-blue-100" : "text-gray-500"
                          }`}
                        >
                          Chuẩn bị: {r.prepTime}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quick Chef's Bio Badge */}
            <div className="bg-[#0a2a4a] text-white p-6 rounded-2xl border border-[#1e5c8e] overflow-hidden relative premium-hover-shine shadow-sm">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Award className="w-24 h-24 stroke-1" />
              </div>
              <div className="space-y-3 z-10 relative">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-brand-blue-100/20 flex items-center justify-center font-display font-extrabold text-[#0070f3] border border-brand-blue-100/30">
                    G
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm">Nghệ Nhân Ẩm Thực Gnod</h4>
                    <span className="text-xs text-brand-blue-100">Bảo Chứng Chất Lượng Sạch</span>
                  </div>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed italic">
                  &ldquo;Mỗi mẻ cá, thớ tôm khô đều trải qua quy trình kiểm soát vi chất cực đoan trước khi phơi sào lộng gió mặn. Chúc các gia chủ có những mâm cơm mộc mạc thơm lừng.&rdquo;
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Recipe Active Showcase Area */}
          <div className="lg:col-span-8 bg-white rounded-3xl border border-brand-blue-100/40 p-6 sm:p-8 shadow-sm space-y-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedRecipeId}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="space-y-8"
              >
                {/* Meta details & Buttons */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-gray-100 pb-6">
                  <div className="space-y-2">
                    <h1 className="font-display font-extrabold text-xl sm:text-2xl lg:text-3xl text-brand-blue-900 leading-tight">
                      {recipe.title}
                    </h1>
                    <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-gray-500 font-medium">
                      <div className="flex items-center gap-1.5">
                        <Flame className="w-4 h-4 text-orange-500" />
                        <span>Độ khó: <strong className="text-brand-blue-900 font-bold">{recipe.difficulty}</strong></span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4 text-emerald-500" />
                        <span>Tổng thời lượng: <strong className="text-brand-blue-900 font-bold">~{parseInt(recipe.prepTime) + parseInt(recipe.cookTime)} phút</strong></span>
                      </div>
                    </div>
                  </div>

                  {/* Aesthetic Tools */}
                  <div className="flex items-center gap-2 self-start">
                    <button
                      onClick={() => toggleLove(recipe.id)}
                      id={`btn-love-${recipe.id}`}
                      className="p-2 sm:p-2.5 rounded-full border border-gray-200 hover:border-red-200 hover:bg-red-50 text-gray-400 hover:text-red-500 transition-all duration-300 shadow-sm"
                      title="Yêu thích món ăn này"
                    >
                      <Heart
                        className={`w-4 h-4 sm:w-4.5 sm:h-4.5 transition-transform duration-300 ${
                          lovedRecipes[recipe.id] ? "fill-red-500 text-red-500 scale-110" : ""
                        }`}
                      />
                    </button>
                    <button
                      onClick={handleShare}
                      id={`btn-share-${recipe.id}`}
                      className="p-2 sm:p-2.5 rounded-full border border-gray-200 hover:border-blue-200 hover:bg-blue-50 text-gray-400 hover:text-[#0070f3] transition-all duration-300 shadow-sm relative"
                      title="Chia sẻ liên kết"
                    >
                      <Share2 className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                      <AnimatePresence>
                        {copiedLink && (
                          <motion.span
                            initial={{ opacity: 0, scale: 0.8, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.8, y: 10 }}
                            className="absolute bottom-full right-1/2 translate-x-1/2 mb-2 bg-[#021a30] text-white font-mono text-[10px] py-1 px-2.5 rounded-md whitespace-nowrap shadow-lg border border-slate-700 pointer-events-none"
                          >
                            Đã sao chép liên kết!
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </button>
                    <button
                      onClick={handlePrint}
                      id={`btn-print-${recipe.id}`}
                      className="p-2 sm:p-2.5 rounded-full border border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-gray-400 hover:text-gray-900 transition-all duration-300 shadow-sm"
                      title="In công thức này"
                    >
                      <Printer className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                    </button>
                  </div>
                </div>

                {/* Dish Intro description */}
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed border-l-4 border-amber-400 pl-4 bg-[#faf9f6]/60 py-3 pr-2 rounded-r-lg">
                  {recipe.description}
                </p>

                {/* Primary Core Ingredient Match Showcase Card (Bridge to purchase!) */}
                {matchedProduct && (
                  <div className="bg-[#f0f8ff] border border-[#0070f3]/25 p-5 rounded-2xl flex flex-col sm:flex-row items-center gap-5 justify-between shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 px-3 py-1 bg-[#0070f3]/10 text-[#0070f3] text-[10px] font-mono rounded-bl-xl font-bold tracking-wider">
                      NGUYÊN LIỆU CHÍNH HÀNG ĐẦU
                    </div>
                    <div className="flex items-center gap-4 w-full sm:w-auto">
                      <div className="w-16 h-16 rounded-xl bg-white border border-[#0070f3]/10 flex items-center justify-center p-1 shadow-inner shrink-0 overflow-hidden">
                        <img
                          src={recipe.productUsed.image}
                          alt={recipe.productUsed.name}
                          className="max-h-full max-w-full object-contain pointer-events-none rounded"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="space-y-1">
                        <span className="text-[10px] text-[#0070f3] font-bold block uppercase tracking-wide">
                          Khuyên dùng bởi Chef Gnod
                        </span>
                        <h4 className="font-display font-bold text-sm text-brand-blue-900 leading-tight">
                          {recipe.productUsed.name}
                        </h4>
                        <p className="text-xs text-gray-500 font-semibold font-mono">
                          Giá niêm yết: {matchedProduct.price} VND / {matchedProduct.unit.split("(")[0]}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => onAddToCart(matchedProduct, 1)}
                      id={`btn-add-recipe-ingredient-${matchedProduct.id}`}
                      className="w-full sm:w-auto mt-3 sm:mt-0 flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#0070f3] text-white hover:bg-brand-blue-600 font-display font-bold text-xs shadow-md shadow-blue-500/10 hover:shadow-lg transition-all duration-300 scale-100 hover:scale-102 active:scale-98 cursor-pointer"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Mua nguyên liệu chính</span>
                    </button>
                  </div>
                )}

                {/* Subgrid: Ingredients vs Method */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                  {/* Left subcolumn: Checked Ingredients */}
                  <div className="md:col-span-5 space-y-4">
                    <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                      <h3 className="font-display font-bold text-base text-brand-blue-900 flex items-center gap-2">
                        <Refrigerator className="w-4.5 h-4.5 text-orange-500" />
                        <span>Thành phần đi kèm</span>
                      </h3>
                      {Object.keys(checkedIngredients).length > 0 && (
                        <button
                          onClick={resetIngredients}
                          className="text-[10px] text-[#0070f3] hover:underline font-bold transition-all"
                        >
                          Xóa đánh dấu
                        </button>
                      )}
                    </div>

                    <div className="space-y-2 bg-[#faf9f6]/40 p-4 rounded-xl border border-gray-100">
                      {recipe.ingredients.map((item, id) => {
                        const isChecked = checkedIngredients[item] || false;
                        return (
                          <div
                            key={id}
                            onClick={() => toggleIngredient(item)}
                            className="flex items-start gap-2.5 p-2 rounded-lg hover:bg-gray-50 cursor-pointer select-none transition-colors"
                          >
                            <div
                              className={`w-[18px] h-[18px] rounded border flex items-center justify-center mt-0.5 transition-all duration-200 ${
                                isChecked
                                  ? "bg-emerald-500 border-emerald-500 text-white"
                                  : "border-gray-300 bg-white"
                              }`}
                            >
                              {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                            </div>
                            <span
                              className={`text-xs text-gray-700 leading-relaxed font-medium transition-all duration-300 ${
                                isChecked ? "line-through text-gray-400 opacity-80" : ""
                              }`}
                            >
                              {item}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Right subcolumn: Step by Step */}
                  <div className="md:col-span-7 space-y-4">
                    <h3 className="font-display font-bold text-base text-brand-blue-900 border-b border-gray-100 pb-2 flex items-center gap-2">
                      <BookOpen className="w-4.5 h-4.5 text-[#0070f3]" />
                      <span>Các bước chế biến chi tiết</span>
                    </h3>

                    {/* Step selector bubble chain */}
                    <div className="flex items-center gap-1.5 overflow-x-auto pb-1 select-none scrollbar-none">
                      {recipe.steps.map((st) => {
                        const isActive = st.stepNumber === activeStep;
                        return (
                          <button
                            key={st.stepNumber}
                            onClick={() => setActiveStep(st.stepNumber)}
                            className={`px-3 py-1.5 rounded-lg font-display text-xs font-bold transition-all shrink-0 ${
                              isActive
                                ? "bg-[#021a30] text-white shadow-sm"
                                : "bg-gray-100 hover:bg-gray-200 text-gray-600"
                            }`}
                          >
                            Bước {st.stepNumber}
                          </button>
                        );
                      })}
                    </div>

                    {/* Active step panel */}
                    <div className="relative min-h-[160px] bg-[#faf9f6]/20 border border-gray-100 p-4 sm:p-5 rounded-2xl">
                      {recipe.steps.map((st) => {
                        const isActive = st.stepNumber === activeStep;
                        if (!isActive) return null;
                        return (
                          <motion.div
                            key={st.stepNumber}
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="space-y-2.5"
                          >
                            <span className="inline-flex items-center justify-center font-display font-black text-2xl text-amber-500">
                              0 {st.stepNumber}
                            </span>
                            <h4 className="font-display font-extrabold text-sm sm:text-base text-brand-blue-900 leading-snug">
                              {st.title}
                            </h4>
                            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-normal">
                              {st.description}
                            </p>
                          </motion.div>
                        );
                      })}
                    </div>

                    {/* Prev / Next controls */}
                    <div className="flex items-center justify-between select-none">
                      <button
                        onClick={() => setActiveStep((prev) => Math.max(1, prev - 1))}
                        disabled={activeStep === 1}
                        className="px-3.5 py-1.5 rounded-lg border border-gray-200 text-xs font-bold font-display hover:bg-gray-50 text-gray-500 disabled:opacity-40 disabled:hover:bg-transparent transition-all"
                      >
                        Bước trước
                      </button>
                      <button
                        onClick={() =>
                          setActiveStep((prev) => Math.min(recipe.steps.length, prev + 1))
                        }
                        disabled={activeStep === recipe.steps.length}
                        className="px-3.5 py-1.5 rounded-lg bg-[#021a30] hover:bg-brand-blue-800 text-white text-xs font-bold font-display disabled:opacity-40 disabled:hover:bg-[#021a30] transition-all flex items-center gap-1"
                      >
                        <span>Sau đó</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Golden Tip Alert Box */}
                <div className="p-4 bg-amber-50 border-l-4 border-amber-500 rounded-r-2xl">
                  <div className="flex gap-2.5">
                    <span className="text-amber-600 text-base font-extrabold select-none">💡 Bí Quyết Nghề Nghiệp:</span>
                    <p className="text-amber-800 text-xs sm:text-sm leading-relaxed font-medium">
                      {recipe.chefTip}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
