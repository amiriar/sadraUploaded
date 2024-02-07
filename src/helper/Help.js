const filteringData = (data , category) =>{
    const filteredData = data.filter(item => item.jobCategory === category)
    return filteredData;
}

export default filteringData