
import { customRef } from 'vue'

export default function useDebounceRef(value:any , delay: number = 1000) {
  let timeout : number;
  return customRef((track, trigger)=> {
    return {
      get() {
        track()
        return value
      },
      set(newValue) {
        // value = newValue
        //   trigger()
        clearTimeout(timeout)
        timeout = setTimeout(()=>{
          value = newValue
          trigger()
        },delay)
        
      }
    }
  })

}