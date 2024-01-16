import React, {useEffect, useState} from 'react';
import DOMPurify from 'dompurify';
import { fetchSierpinskiTriangleSVG } from '../services/goServerService';

function SierpinksiTriangle() {
    const [depth, setDepth] = useState<number>(0);
    const [svgData, setSvgData] = useState<string>('');

    // Hooks
    useEffect(() => {
        getSvg(0)
    }, [])

    // When this is used, ONLY 0-10 (int) should be able to be input
    const handleDepthChange = (e: any) => {
        let newDepth = parseInt(e.target.value, 10);
        if (isNaN(newDepth)) {
            throw new Error('Input could not be coerced to an integer')
        }

        if (newDepth < 0) {
            newDepth = 0
        } else if (newDepth > 10) {
            newDepth = 10
        }
        setDepth(newDepth)
        getSvg(newDepth)
    }

    const incrementDepth = () => {
        if (depth < 10) {
            setDepth(depth + 1)
        }
    }

    const decrementDepth = () => {
        if (depth > 0) {
            setDepth(depth - 1)
        }
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
        <div>
            <div>
                <button onClick={decrementDepth} disabled={depth === 0}>-</button>
                <input type="number" value={depth} onChange={handleDepthChange} />
                <button onClick={incrementDepth} disabled={depth === 10}>+</button>
                <svg dangerouslySetInnerHTML={{ __html: svgData }} />
            </div>
        </div>
    )
}

export default SierpinksiTriangle;