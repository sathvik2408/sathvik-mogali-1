import styles from '../Skills/SkillsStyles.module.css'
import checkMarkIcon from '../../../assets/checkmark-dark.svg'
import SkillList from '../../../common/SkillList'
function Skills() {
  return (
      <section id='skills' className={styles.container}>
      <h1 className='sectionTitle'>Skills</h1>
      <div className={styles.skillList}>
       <SkillList src={checkMarkIcon} skill='HTML'/>
       <SkillList src={checkMarkIcon} skill='CSS'/>
       <SkillList src={checkMarkIcon} skill='JavaScript'/>
       <SkillList src={checkMarkIcon} skill='React JS'/>
       </div>
       <hr/>
      <div className={styles.skillList}>
       <SkillList src={checkMarkIcon} skill='Node'/>
       <SkillList src={checkMarkIcon} skill='Express'/>
       <SkillList src={checkMarkIcon} skill='Git'/>
       <SkillList src={checkMarkIcon} skill='Redux'/>
       </div>
       <hr/>
      <div className={styles.skillList}>
       <SkillList src={checkMarkIcon} skill='Tailwind CSS'/>
       <SkillList src={checkMarkIcon} skill='Bootstrap'/>
       <SkillList src={checkMarkIcon} skill='Postgre SQL'/>
       </div>
       
    </section>
  )
}

export default Skills
