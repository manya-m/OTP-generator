export const Button = ({
    disabled,
    children,
    onClick,
}) => {
    return (
        <span
            onClick={onClick}
            className={`rounded-2xl text-xl px-8 py-4 text-white cursor-pointer ${
                disabled ? "bg-blue-200" : "bg-green-400"
            }`}
        >
            {children}
        </span>
    );
};
