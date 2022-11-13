const getNewSearchParams = (newSearchParams) => {
    var url = new URL(window.location.href);
    const lang = url.searchParams.get("lang");

    return '?' + new URLSearchParams(
        lang ? {
            ...newSearchParams,
            lang
        } 
        : newSearchParams);
}

export {
    getNewSearchParams
}