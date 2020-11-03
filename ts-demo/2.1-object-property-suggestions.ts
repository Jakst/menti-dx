export type HasLotsOfProperties = {
  apa?: boolean
  grogg?: string
  cykel?: boolean
  johnny: boolean // This one will be suggested first because it's required
  pizza?: string
  pizzaWithPineaple?: number
}

export const a: HasLotsOfProperties = {
  // Instructions:
  // Put your cursor on the empty line below and press the
  // auto suggest shortcut "Ctrl + Spacebar".
  // (Make sure you haven't bound it to something else system wide)
  // This will suggest all available properties for this object, which
  // are not already filled in.
  johnny: false
}
