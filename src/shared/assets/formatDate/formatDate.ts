export const formatDate = (dateStr: string): string => {
    if (dateStr) {
        const months = [
            'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
            'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
        ];
        const [day, month, year] = dateStr.split('/').map(Number);

        return `${day} ${months[month - 1]} ${year}`;
    }
};