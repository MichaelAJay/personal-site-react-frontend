import {useEffect, useState} from 'react';
import DOMPurify from 'dompurify';
import { fetchSierpinskiTriangleSVG } from '../../services/goServerService';
import { InputNumber } from 'antd';
import './Sierpinski.css'

function SierpinksiTriangle() {
    const [svgData, setSvgData] = useState<string>('');

    const MIN_DEPTH = 0;
    const MAX_DEPTH = 10;

    // Hooks
    useEffect(() => {
        getSvg(0)
    }, [])

    const onChange = (value: number | null) => {
        if (value == null) return;

        let newDepth = value
        if (newDepth < MIN_DEPTH) {
            newDepth = MIN_DEPTH
        } else if (newDepth > MAX_DEPTH) {
            newDepth = MAX_DEPTH
        }
        getSvg(newDepth)
    }

    const getSvg = async (depth: number) => {
        try {
            const data = await fetchSierpinskiTriangleSVG(depth);
            const sanitizedData = DOMPurify.sanitize(data);
            setSvgData(sanitizedData);
        } catch (err) {
            console.error('Error fetching initial data:', err)
        }
    }

    return (
        <div className='Sierpinski-container'>
            <InputNumber
                className='Sierpinski-input-number'
                min={MIN_DEPTH}
                max={MAX_DEPTH}
                defaultValue={MIN_DEPTH}
                onChange={onChange}
            />
            <div
                className='Sierpinski-triangle-viewer'
                dangerouslySetInnerHTML={{ __html: svgData }}
            />
        </div>
    )
}

export default SierpinksiTriangle;