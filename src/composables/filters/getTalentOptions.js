const getTalentOptions = () => {
    const talentOptions = [
        {id: "0", name: "All", value: "all"},
        {id: "1", name: "None", value: "none"},
        {id: "2", name: "Light", value: "light"},
        {id: "3", name: "Shadow", value: "shadow"},
        {id: "4", name: "Ice", value: "ice"},
        {id: "5", name: "Lightning", value: "lightning"},
        {id: "6", name: "Earth", value: "earth"}
    ]

    return { talentOptions }
}

export const getTalentByName = (inputTalent) => {
    return getTalentOptions().talentOptions.filter(talent => talent.value === inputTalent.toLowerCase())[0]
}

export default getTalentOptions
