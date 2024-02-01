import { Flex } from "antd";
import './HomeSkillSection.css';
import HomeSkillSectionContent, { HomeSkillSectionContentArgs } from "./HomeSkillSectionContent";

type HomeSkillSectionArgs = {
    id: string;
    img: {
        isLeft: boolean;
        alt: string;
        src: string;
    }
    content: HomeSkillSectionContentArgs;
}

function HomeSkillSection(args: HomeSkillSectionArgs) {
    return (
        <div className={`flex-container${args.img.isLeft ? '' : '-lite'}`}>
            <Flex id={args.id} align='center'>
                {args.img.isLeft &&
                
                        <img className='home-skill-img-left'
                            alt={args.img.alt}
                            src={args.img.src}
                        />
                    
                }
                <div className={`home-skill-content-${args.img.isLeft ? 'right' : 'left'}`}>
                    {/* { args.children } */}
                    <HomeSkillSectionContent {...args.content} />
                </div>
                {!args.img.isLeft &&
                    
                        <img
                            className='home-skill-img-right'
                            alt={args.img.alt}
                            src={args.img.src}
                        />
                    
                }
            </Flex>
        </div>
    )
}

export default HomeSkillSection;