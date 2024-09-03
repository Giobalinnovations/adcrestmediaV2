interface HighlightTextProps {
  text?: string;
  children?: React.ReactNode;
  className?: string;
}

const HighlightText: React.FC<HighlightTextProps> = ({
  text,
  children,
  className,
}) => {
  return (
    <strong>
      {text ? (
        <span className={`${className}`} style={{ color: '#e08c8c' }}>
          {text}
        </span>
      ) : (
        children
      )}
    </strong>
  );
};

export default HighlightText;
