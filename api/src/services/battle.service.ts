import { Battle, Monster } from "../models";

const calculateDamage = (attacker: Monster, attacked: Monster): number =>
    Math.max(attacker.attack - attacked.defense, 1)

const getFirstAttacker = (monsterA: Monster, monsterB: Monster): Monster => {
    if (monsterA.speed > monsterB.speed) {
        return monsterA
    }
    if (monsterB.speed > monsterA.speed) {
        return monsterB
    }
    return monsterA.attack >= monsterB.attack ? monsterA : monsterB
}

export const makeBattle = async (monsterA: Monster, monsterB: Monster): Promise<Battle> => {
    let attacker:Monster = getFirstAttacker(monsterA, monsterB)
    let attacked:Monster = monsterA.id === attacker.id ? monsterB : monsterA
    while (true) {
        const damage = calculateDamage(attacker, attacked)
        attacked.hp -= damage
        if (attacked.hp <= 0) {
            try {
                return await Battle.query().insert({
                    monsterA,
                    monsterB,
                    winner: attacker
                })
            } catch (error) {
                console.error(error);
                throw new Error("Failed to save battle");
            }
        }
        const auxMonster:Monster = attacker
        attacker = attacked
        attacked = auxMonster
    }
}