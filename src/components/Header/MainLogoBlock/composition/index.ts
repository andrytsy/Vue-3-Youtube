import { Ref, ref } from 'vue'

export const isMenuOpen: Ref = ref(true)

export const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
}
