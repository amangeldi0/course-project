import {classNames} from "shared/lib/classNames/classNames";

import cls from './LangSwitcher.module.scss';
import {useTranslation} from "react-i18next";
import {Button, ThemeButton} from "shared/ui/Button/Button";

interface LangSwitcherProps{
    className?: string;
}

export const LangSwitcher = ({className}: LangSwitcherProps) => {

    const changeLang = () => i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')

    const { t, i18n } = useTranslation()

    return (
        <div >
            <Button
                className={classNames(cls.LangSwitcher, {}, [className])}
                theme={ThemeButton.CLEAR}
                onClick={changeLang}>
                {t('Язык')}
            </Button>
        </div>
    );
};