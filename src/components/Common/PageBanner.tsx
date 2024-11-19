'use client';

interface PageBannerProps {
  pageTitle: string;
  BGImage: string;
  className?: string;
}

const PageBanner: React.FC<PageBannerProps> = ({
  pageTitle,
  BGImage,
  className,
}) => {
  return (
    <>
      <div
        className={`page-title-area ${className}`}
        style={{ backgroundImage: `url(${BGImage})` }}
      >
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <h1 className="text-white">{pageTitle}</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageBanner;
