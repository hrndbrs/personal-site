import { ref, onMounted, onUnmounted } from 'vue'

export function useViewport(breakpoint = 768) {
  const isMobile = ref(false)

  const checkViewport = () => {
    isMobile.value = window.innerWidth < breakpoint
  }

  onMounted(() => {
    checkViewport()
    window.addEventListener('resize', checkViewport)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', checkViewport)
  })

  return { isMobile }
} 