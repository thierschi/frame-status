import Header from './header';

interface Props {
    children?: React.ReactNode;
}
export default function ContentWrapper({ children }: Props): JSX.Element {
    return (
        <div className="flex flex-col w-screen h-screen">
            <Header />
            <div className="flex-1 overflow-auto bg-slate-50 dark:bg-zinc-700 p-2">
                {children}
            </div>
        </div>
    );
}
