import {useState} from "react";
import {classNames} from "shared/lib/classNames/classNames";

import cls from './Sidebar.module.scss';
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher/ThemeSwitcher";
import {LangSwitcher} from "shared/ui/LangSwitcher/LangSwitcher";

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({className}: SidebarProps) => {

    const [collapsed, setCollapsed] = useState<boolean>(true);



    return (
        <div className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}>
            <button onClick={() => setCollapsed(prevState => !prevState)}>toggle</button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    );
};