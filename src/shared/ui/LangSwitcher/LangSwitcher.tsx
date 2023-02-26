import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

interface LangSwitcherProps{
    className?: string;
    short?: boolean;
}

export const LangSwitcher = ({ className, short }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const changeLang = async () => i18n
        .changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');

    return (
        <div>
            <Button
                className={className}
                theme={ButtonTheme.CLEAR}
                onClick={changeLang}
            >
                {t(short ? 'Короткий язык' : 'Язык')}
            </Button>
        </div>
    );
};
