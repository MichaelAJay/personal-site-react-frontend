import {useEffect, useState} from 'react';
import DOMPurify from 'dompurify';
import { fetchSierpinskiTriangleSVG } from '../../services/goServerService';
import { ColorPicker, InputNumber } from 'antd';
import './Sierpinski.css';
import Hero from '../../components/Hero';
import { InfoCircleTwoTone } from '@ant-design/icons';
import { colorAliases } from '../..';
import { Color } from 'antd/es/color-picker';

const CONTROL_ID = {
    iterationController: 'iterations',
    colorController: 'colors'
};

function SierpinksiTriangle() {
    const [svgData, setSvgData] = useState<string>('');
    const [depth, setDepth] = useState<number>(0);
    const [color, setColor] = useState<string>(colorAliases.lightGreen)

    const MIN_DEPTH = 0;
    const MAX_DEPTH = 10;

    // Hooks
    useEffect(() => {
        getSvg(0, colorAliases.lightGreen)
    }, [])

    const onIterationChange = (value: number | null) => {
        if (value == null) return;

        let newDepth = value
        if (newDepth < MIN_DEPTH) {
            newDepth = MIN_DEPTH
        } else if (newDepth > MAX_DEPTH) {
            newDepth = MAX_DEPTH
        }
        setDepth(newDepth);
        getSvg(newDepth, color);
    }

    const onColorChange = (color: Color) => {
        const newColorString = color.toHexString();
        setColor(newColorString);
        getSvg(depth, newColorString);

    }

    const getSvg = async (depth: number, color: string) => {
        try {
            const data = await fetchSierpinskiTriangleSVG(depth, color);
            const sanitizedData = DOMPurify.sanitize(data);
            setSvgData(sanitizedData);
        } catch (err) {
            console.error('Error fetching initial data:', err)
        }
    }

    return (
        <Hero>
            <InfoCircleTwoTone className='sierpinski-info-icon' twoToneColor={colorAliases.lightGreen} />
            <div
                className='Sierpinski-triangle-viewer'
                dangerouslySetInnerHTML={{ __html: svgData }}
            />
            <div className='sierpinski-controls-container'>
                <div className='sierpinski-iterations-control'>
                    <label htmlFor={CONTROL_ID.iterationController}>Number of iterations</label>
                    <InputNumber
                        id={CONTROL_ID.iterationController}
                        className='Sierpinski-input-number'
                        min={MIN_DEPTH}
                        max={MAX_DEPTH}
                        defaultValue={MIN_DEPTH}
                        onChange={onIterationChange}
                    />
                </div>
                <div className='sierpinski-color-control'>
                    <label htmlFor={CONTROL_ID.colorController}>Pick a color!</label>
                    <div id={CONTROL_ID.colorController}>
                        <ColorPicker
                            onChangeComplete={onColorChange}
                            defaultValue={colorAliases.lightGreen}
                            size={'large'}
                        />
                    </div>
                </div>
            </div>
        </Hero>
    )
}

export default SierpinksiTriangle;