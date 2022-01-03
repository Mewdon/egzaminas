const ajaxService = (term)=>{
    const url = 'http://www.omdbapi.com/?t='
    const key = "eefcb048"


    return fetch(`${url}${term}&apikey=${key}`)
        .then(responce =>responce.json())


}

export default ajaxService