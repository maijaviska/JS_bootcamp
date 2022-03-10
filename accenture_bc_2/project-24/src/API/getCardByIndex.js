import getCards from "./getCards"

function getCardByIndex(index) {
    const cards = getCards()

    return cards[index]

}

export default getCardByIndex