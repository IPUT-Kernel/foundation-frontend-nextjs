const Banner = ({
  title = "Dashboard",
  links,
}: {
  title?: string;
  links?: React.ReactNode;
}) => {
  return (
    <div className="flex justify-between flex-wrap items-center gap-4 mb-6 lg:mb-8">
      <h2 className="h2">{title}</h2>
      {links}
    </div>
  );
};

export default Banner;
