function choosWeapon() {
    let playerWeaponSelect = document.getElementById('playerWeaponSelect')
    let playerChoice = document.getElementById('playerChoiceImg')
    changeImage(playerChoiceImg, playerWeaponSelect.value)

}

function changeImage(img, selectedWeapon) {
    if (selectedWeapon === 'rock') img.src = 'rock.jpg'
    else if (selectedWeapon === 'paper') img.scr = 'paper.jpg'
    else if (selectedWeapon === 'scissors') img.scr = 'scissors.jpg'
}

function play() {
    let playerWeapon = document.getElementById('playerWeaponSelect').value
    if (playerWeapon !== 'not_selected') {
        let enemyWeapon = getRandomWeapon()
        let enemyImg = getElementById('enemyChoiceImg')
        changeImage(enemyImg, enemyWeapon)

        let fightResult = fight(playerWeapon, enemyWeapon)
        displayFightResult()
        changeScore(fightresult)
    }
}

function getRandomWeapon() {
    let weapons = ['rock', 'paper', 'scissors']
    let randomWeaponIndex = Math.floor(Math.random()*weapons.length)
    return weapons[randomWeaponIndex]
}

function fight(pw, ew) {
    if (pw === 'rock') {
        if (ew=== 'rock') return 0
        else if (ew === 'paper') return -1
        else if (ew === 'scissors') return 1
    } else if (pw === 'paper') {

    }else if (pw === )
}

function changeScore(fightResult) {
    if (fightResult === 1) playerScore++
    else if (fightResult === -1) enemyScore++
}

function displayFightResult(fightResult) {
    let msg = ''
    switch(fightResult) {
        case -1:
            msg = 'You have <span style ="color:red;">lost</span>!'
            break
        case 0:
            msg = 'It is a <span style ="color:darkgry;">tie</span>!'
            break
        case 1:
            msg = 'You have <span style="color: green;">won</span!'
            break
        default:
            msg = 'Rock Paper Scissors'
            break
    }
    let fightResultContainer = document.getElementById('fightResult')
    fightResultContainer.innerHTML = msg
}