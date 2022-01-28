import React from 'react'
import Title from '../../components/Title/Title'
import classes from './Price.module.scss'
import priceImg1 from '../../assets/images/price/price-img1.webp'
import priceImg2 from '../../assets/images/price/price-img2.webp'
import MyButton from '../../components/UI/MyButton/MyButton'
import useTranslation from "next-translate/useTranslation";
import Image from 'next/image';

const Price = () => {
    const { t } = useTranslation();
    return (
        <div className={classes.Wrapper}>
            <div className="container">
                <div className={classes.Inner}>
                    <div className={classes.Title}>
                        <Title title={t('common:price.title')}/>
                    </div>
                    <p className={classes.Text} data-aos="fade-right">{t('common:price.text')}</p>
                    <div className={classes.Content}>
                        <div className={`${classes.ContentItem} ${classes.ContentItemBefore}`} data-aos="fade-right">
                            <Image src={priceImg1} alt="img"/>  
                            <p className={classes.ContentItemText}>{t('common:price.contentItemText1')}</p>  
                            <p className={classes.ContentItemSubtext}>{t('common:price.contentItemSubtext')}</p>   
                            <div className={classes.ContentItemButton}>
                                <MyButton variant="contained">{t('common:price.button')}</MyButton>      
                            </div>  
                        </div>
                        <div className={classes.ContentItem} data-aos="fade-left">
                            <div className={classes.ContentItemImg}><Image src={priceImg2} alt="img" /></div>
                            <p className={classes.ContentItemText}>{t('common:price.contentItemText2')}</p>  
                            <p className={classes.ContentItemSubtext}>{t('common:price.contentItemSubtext')}</p>   
                            <div className={classes.ContentItemButton}>
                                <MyButton variant="contained">{t('common:price.button')}</MyButton>    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Price
