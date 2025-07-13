import React from 'react'

const Albums = () => {
  return (
    <>

        <div className={styles.sectionWrapper}>
        <div className={styles.imageContainer}>
          <motion.img
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            src="\images\our-mission.png"
            alt="Mission"
          />
        </div>
        </div>

    </>
  )
}

export default Albums