import { ref, onMounted } from 'vue'

export default function useAnimation() {
  const showTitle = ref(false)

  onMounted(() => {
    showTitle.value = true
  })

  return {
    showTitle
  }
}
