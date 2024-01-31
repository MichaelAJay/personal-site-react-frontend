import { Flex } from "antd";
import './HomeSkillSection.css';

type HomeSkillSectionArgs = {
    id: string;
    img: {
        isLeft: boolean;
        alt: string;
        src: string;
    }
    children: any;
}

function HomeSkillSection(args: HomeSkillSectionArgs) {


    return (
        <Flex id={args.id} align='flex-start'>
            {args.img.isLeft &&

                    <img className='home-skill-img-left'
                        alt={args.img.alt}
                        src={args.img.src}
                    />
                
            }
            <div className={`home-skill-content-${args.img.isLeft ? 'right' : 'left'}`}>
                { args.children }
            </div>
            {!args.img.isLeft &&
                
                    <img
                        className='home-skill-img-right'
                        alt={args.img.alt}
                        src={args.img.src}
                    />
                
            }
        </Flex>
    )
}

export default HomeSkillSection;