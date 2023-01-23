import {clients} from "../constants"
import styles from "../style";


const Clints = () =>  (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((clients)=>(
          <div key={clients.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`}>
            <img src={clients.logo} alt="clients" className="sm:w-[192px] w-[100px] object-contain text-gradient"/>
            {}
          </div> 
        ))}
      </div>

    </section>
  )


export default Clints