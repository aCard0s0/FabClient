const getClassOptions = () => {
    const classOptions = [
        {id: "0", name: "All", value: "all"},
        {id: "1", name: "Brute", value: "brute"},
        {id: "2", name: "Guardian", value: "guardian"},
        {id: "3", name: "Illusionist", value: "illusionist"},
        {id: "4", name: "Mechanologist", value: "mechanologist"},
        {id: "5", name: "Ninja", value: "ninja"},
        {id: "6", name: "Ranger", value: "ranger"},
        {id: "7", name: "Runeblade", value: "runeblade"},
        {id: "8", name: "Shapeshifter", value: "shapeshifter"},
        {id: "9", name: "Warrior", value: "warrior"},
        {id: "10", name: "Wizard", value: "wizard"},
    ]

    return { classOptions }
}

export const getClassByName = (inputName) => {
    return getClassOptions().classOptions.filter(clazz => clazz.value === inputName.toLowerCase())[0]
}

export default getClassOptions
