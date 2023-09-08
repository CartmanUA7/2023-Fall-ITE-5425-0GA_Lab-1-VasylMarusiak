type HeaderProps = {
    total: number;
};

const Header = ({total}: HeaderProps) => {
    return (
        <header>
            <h1>Total Number of Task: {total}</h1>
        </header>
    );
};

export default Header;