import { DIRECTIONS, OBJECT_TYPE } from './setup';

// rASTGELE HAREKET
export function randomMovement(position, direction, objectExist) {
  let dir = direction;
  let nextMovePos = position + dir.movement;
  // Yön nesneleri ANAHTARLARINDN bir dizi oluşturun
  const keys = Object.keys(DIRECTIONS);

  while (
    objectExist(nextMovePos, OBJECT_TYPE.WALL) ||
    objectExist(nextMovePos, OBJECT_TYPE.GHOST)
  ) {
    // RANDOM ANAHTar
    const key = keys[Math.floor(Math.random() * keys.length)];
    // Yeni yönü belirleyin
    dir = DIRECTIONS[key];
    // Bir sonraki hareketi ayarlayın
    nextMovePos = position + dir.movement;
  }

  return { nextMovePos, direction: dir };
}
