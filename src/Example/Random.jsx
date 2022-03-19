import { useState } from 'react'

const Random = () => {

    const gifts = [
        'Du lịch Châu Âu',
        'Nhịn đói 3 ngày',
        'Ăn hải sản',
        'Chúc bạn may mắn lần sau',
        'Có ngay 1000 đồng',
        'Chúc bạn may mắn lần sau',
        'Hiến máu',
        'Chúc bạn may mắn lần sau',
        'Chúc bạn thêm lượt nữa ^^'
    ]

    const [gift, setGift] = useState()
    const handleRandom = () => {
        const index = Math.floor(Math.random() * gifts.length)
        setGift(gifts[index])
    }
    return (
        <div style={{ padding: 20 }}>
            <h1>{gift || 'Chưa có phần thưởng'}</h1>
            <button onClick={handleRandom}>Random</button>
        </div>
    )
}

export default Random;