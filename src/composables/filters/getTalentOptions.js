const getTalentOptions = () => {
    const talentOptions = [
        {id: "0", name: "All", value: ""},
        {id: "1", name: "None", value: "None"},
        {id: "2", name: "Light", value: "Light"},
        {id: "3", name: "Shadow", value: "Shadow"},
        {id: "4", name: "Ice", value: "Ice"},
        {id: "5", name: "Lightning", value: "Lightning"},
        {id: "6", name: "Earth", value: "Earth"}
    ]

    return { talentOptions }
}

export default getTalentOptions
