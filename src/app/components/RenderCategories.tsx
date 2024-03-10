const RenderCategories = (categories: any) =>
  categories.map((category: any) => (
    <div key={category._id}>
      <span className="bg-white bg-opacity-30 text-[#fff] font-bold text-[12px] mt-4  py-[6px] px-[10px] rounded-[8px]">
        {category.title}
      </span>
    </div>
  ));

export default RenderCategories;
