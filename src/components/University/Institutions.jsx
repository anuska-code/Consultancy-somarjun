import React from 'react';
import styles from './Institutions.module.css';
import { FaUniversity, FaSchool, FaGraduationCap } from 'react-icons/fa';
import { MdSchool } from 'react-icons/md';

const Institutions = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {/* Canada Section */}
        <section className={styles.section}>
          <h2 className={styles.heading}>CANADA</h2>
          <div className={styles.logoGrid}>
            <div className={styles.item}><FaUniversity /> Royal Roads University</div>
            <div className={styles.item}><FaSchool /> Suncrest College</div>
            <div className={styles.item}><FaSchool /> NorQuest College</div>
            <div className={styles.item}><FaGraduationCap /> Capilano University</div>
            <div className={styles.item}><FaUniversity /> Trinity Western University</div>
            <div className={styles.item}><MdSchool /> Georgian College</div>
            <div className={styles.item}><FaSchool /> Centennial College</div>
            <div className={styles.item}><MdSchool /> Durham College</div>
            <div className={styles.item}><FaUniversity /> Fleming College</div>
            <div className={styles.item}><FaSchool /> Niagara College</div>
          </div>
        </section>

        {/* New Zealand Section */}
        <section className={styles.section}>
          <h2 className={styles.heading}>NEW ZEALAND</h2>
          <div className={styles.logoGrid}>
            <div className={styles.item}><FaUniversity /> Study Group</div>
            <div className={styles.item}><MdSchool /> West Coast Polytechnic</div>
            <div className={styles.item}><FaSchool /> Unitec</div>
            <div className={styles.item}><FaUniversity /> UCOL</div>
            <div className={styles.item}><FaGraduationCap /> Toi Ohomai</div>
            <div className={styles.item}><FaSchool /> NorthTec</div>
            <div className={styles.item}><FaSchool /> NMIT</div>
            <div className={styles.item}><MdSchool /> NZMA</div>
            <div className={styles.item}><FaUniversity /> Massey University</div>
            <div className={styles.item}><FaSchool /> Aspire2 International</div>
          </div>
        </section>

        {/* UK Section */}
        <section className={styles.section}>
          <h2 className={styles.heading}>UK</h2>
          <div className={styles.logoGrid}>
            <div className={styles.item}><FaUniversity /> Solent University</div>
            <div className={styles.item}><FaGraduationCap /> UWE Bristol</div>
            <div className={styles.item}><FaUniversity /> University of Salford</div>
            <div className={styles.item}><FaSchool /> Study Group</div>
            <div className={styles.item}><MdSchool /> Accelerate Education</div>
            <div className={styles.item}><FaUniversity /> University of Chichester</div>
            <div className={styles.item}><FaSchool /> Malvern International</div>
            <div className={styles.item}><FaUniversity /> University of East London</div>
            <div className={styles.item}><FaUniversity /> University of Greenwich</div>
            <div className={styles.item}><FaUniversity /> Coventry University</div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Institutions;
