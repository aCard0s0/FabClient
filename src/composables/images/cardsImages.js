const cardsImages = () => {
    const getFirstEdPublicImage = (imagesPaths) => {
        if (imagesPaths !== undefined) {
            return process.env.VUE_APP_GCP_CARD_IMG_BUCKET + `${imagesPaths.firstEdition}.png`
        }
    }

    const getUnlimitedEdPublicImage = (imagesPaths) => {
        if (imagesPaths !== undefined) {
            return process.env.VUE_APP_GCP_CARD_IMG_BUCKET + `${imagesPaths.unlimitedEdition}.png`
        }
    }

    return {
        getFirstEdPublicImage,
    }
}

export default cardsImages
