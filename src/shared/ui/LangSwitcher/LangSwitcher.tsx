import { classNames } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import cls from './LangSwitcher.module.scss';

interface LangSwitcherProps{
    className?: string;
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const changeLang = async () => i18n
        .changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');

    return (
        <div>
            <Button
                className={classNames(cls.LangSwitcher, {}, [className])}
                theme={ThemeButton.CLEAR}
                onClick={changeLang}
            >
                {t('Язык')}
            </Button>
        </div>
    );
};
