import { ref, onMounted } from 'vue'

export default function useAnimation() {
  const show = ref(false)

  onMounted(() => {
    show.value = true
  })

  return {
    show
  }
}
