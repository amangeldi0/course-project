import { FC } from "react";
import {classNames} from "shared/lib/classNames/classNames";

import cls from './ThemeSwitcher.module.scss';
import {useTheme} from "app/providers/ThemeProvider";

import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import LightIcon from 'shared/assets/icons/theme-light.svg'

import { Theme } from "app/providers/ThemeProvider";
import { Button, ThemeButton } from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
    
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = () => {


    const { theme, toggleTheme } = useTheme()

    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames(cls.ThemeSwitcher)}
            onClick={toggleTheme}
        >
            {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
        </Button>
    );
};