export const getPostedDate = (date) => {
    const postedDate = new Date(date);
    const currentDate = new Date();
    const diff = currentDate.getTime() - postedDate.getTime();
    const diffDays = Math.ceil(diff / (1000 * 3600 * 24));
    const diffHours = Math.ceil(diff / (1000 * 3600));
    const diffMinutes = Math.ceil(diff / (1000 * 60));
    if (diffDays > 1) {
        return `Posted ${diffDays} days ago`;
    } else if (diffHours > 1) {
        return `Posted ${diffHours} hours ago`;
    } else {
        return `Posted ${diffMinutes} minutes ago`;
    }
};


export const shortenText = (text, length) => {
    if (text.length > length) {
        const shortenedText = text.substring(0, length) + '...'
        return shortenedText
    } else {
        return text
    }
}

export const shortenUrl = (url) => {
    if (url) {
        const urlArray = url.split('/')
        const shortenedUrl = urlArray[2]
        return shortenedUrl
    }
}

export const formatDate = (date) => {
    const postedDate = new Date(date)
    const currentDate = new Date()
    const diff = currentDate.getTime() - postedDate.getTime()
    const diffDays = Math.ceil(diff / (1000 * 3600 * 24))
    const diffHours = Math.ceil(diff / (1000 * 3600))
    const diffMinutes = Math.ceil(diff / (1000 * 60))
    if (diffDays > 1) {
        return `${postedDate.getFullYear()}-${postedDate.getMonth() + 1}-${postedDate.getDate()}`
    } else if (diffHours > 1) {
        return `${postedDate.getFullYear()}-${postedDate.getMonth() + 1}-${postedDate.getDate()}`
    } else {
        return `${postedDate.getFullYear()}-${postedDate.getMonth() + 1}-${postedDate.getDate()}`
    }
}