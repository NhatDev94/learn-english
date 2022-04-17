const learningUrl = 'https://61d58e1a2b4f730017a82900.mockapi.io/learning'
const allUrl = 'https://61d58e1a2b4f730017a82900.mockapi.io/demo'

export const getAllVocabulary = async () => {
    const res = await fetch(allUrl)
    return await res.json()
}

export const putAllVocabulary = async (list) => {
    const all = {
        data: list
    }
    await fetch(`${allUrl}/1`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(all),
    })
}


// ====================================
export const getLearning = async () => {
    const res = await fetch(learningUrl)
    return await res.json()
}

export const putLearning = async (list) => {
    const learnings = {
        data: list
    }
    await fetch(`${learningUrl}/1`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(learnings),
    })
}

// export const postLearning = async (list) => {
//     const learnings = {
//         data: list
//     }
//     await fetch(`${learningUrl}`, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify(learnings),
//     })
// }



// const a = [
//     {
//         "vocabulary": "Abide by",
//         "mean": "(v) to comply with, to conform ( Tuân theo )",
//         "type": "learned",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Agreement",
//         "mean": "(n) a mutual arrangement, a contract (hợp đồng, giao kèo)",
//         "type": "learning",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Agreeable",
//         "mean": "(adj) đồng ý, tán thành, bằng lòng, thoả thuận",
//         "type": "learning",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Assurance",
//         "mean": "(n) guarantee, confidence (sự chắc chắn; sự tin chắc; điều chắc chắn, điều tin chắc)",
//         "type": "learning",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Determine",
//         "mean": "(v) to find out, to influence (định, xác định, định rõ)",
//         "type": "learning",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Engage",
//         "mean": "(v) to hire, to involve (thuê, đính hôn, giao ước)",
//         "type": "learning",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Establish",
//         "mean": "(v) to institute permanently, to bring about (thành lập, thiết lập)",
//         "type": "learning",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Obligate",
//         "mean": "(v) to bind legally or morally ( ràng buộc, ép buộc)",
//         "type": "learning",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Obligation",
//         "mean": "(n) nghĩa vụ, bổn phận ,sự ràng buộc",
//         "type": "learning",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Provision",
//         "mean": "(n) a measure taken beforehand, a stipulation (điều khoản)",
//         "type": "learning",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Provider",
//         "mean": "(n) nhà cung cấp",
//         "type": "learning",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Resolve",
//         "mean": "(v) to deal with successfully, to declare ( giải quyết )",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Specify",
//         "mean": "(v) to mention explicitly ( chỉ rõ, ghi rõ, định rõ, ghi chú vào phần chi tiết kỹ thuật )",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Specific",
//         "mean": "(adj) cụ thể, rõ ràng, rành mạch",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Attract",
//         "mean": "(v) to draw by appeal ( hấp dẫn, lôi cuốn )",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Attraction",
//         "mean": "(n) sự hấp dẫn, lôi cuốn",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Comparison",
//         "mean": "(n) sự so sánh",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Comparable",
//         "mean": "(adj) tương đồng và có thể so sánh được.",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Consume",
//         "mean": "(v) to absorb, to use up (dùng, tiêu thụ)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Consumable",
//         "mean": "(adj) có thể ăn được, có thể tiêu thụ được",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Convince",
//         "mean": "(v) to bring to believe by argument, to persuade (làm cho tin, làm cho nghe theo, thuyết phục)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Current",
//         "mean": "(adj) hiện tại, hiện thời, (n) đang lưu hành",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Fad",
//         "mean": "(n) a practice followed enthusiastically for a short time, a craze (mốt)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Inspire",
//         "mean": "(v) to spur on, to stimulate imagination or emotion. (truyền (cảm hứng, ý nghĩ...); truyền cảm hứng cho (ai), gây cảm hứng cho (ai)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Market",
//         "mean": "(n) the course of buying and selling a product, n. the demand for a product (giá thị trường; tình hình thị trường)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Persuade",
//         "mean": "(v) to move by argument or logic (làm cho tin; thuyết phục)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Productive",
//         "mean": "a. useful, getting a lot done (thực hiện được nhiều, hữu ích, có năng suất)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Satisfy",
//         "mean": "(v) to make happy (làm thoả mãn, làm vừa lòng, đáp ứng (được yêu cầu, điều kiện...))",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "characteristic",
//         "mean": "Revealing of individual traits (riêng, riêng biệt, đặc thù, đặc trưng)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Consequence",
//         "mean": "that which follows necessarily (hậu quả, kết quả)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Consider",
//         "mean": "to think about carefully (cân nhắc, xem xét, suy xét, suy nghĩ)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Cover",
//         "mean": "to provide protection against (che, phủ, bao phủ, bao trùm, bao bọc)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Expire",
//         "mean": "to come to an end (mãn hạn, kết thúc, hết hiệu lực (luật); mai một, mất đi)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Frequently",
//         "mean": "Occurring commonly, widespread (thường xuyên, hay xảy ra, có luôn)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Imply",
//         "mean": "to indicate by inference (ý nói; ngụ ý; bao hàm ý)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Reputation",
//         "mean": "the overall quality of character (tiếng tốt, thanh danh, danh tiếng)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Reputable",
//         "mean": "có uy tín, danh tiếng",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "require",
//         "mean": "(v) yêu cầu",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "vary",
//         "mean": "(v) thay đổi, biến đổi",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Address",
//         "mean": "to direct to the attention of (địa chỉ, chuyển đi tới )",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Demonstrate",
//         "mean": "chứng minh, giải thích, bày tỏ, biểu lộ, làm thấy rõ",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Evaluate",
//         "mean": "to determine the value or impact of (ước lượng , định giá)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Gather",
//         "mean": "to accumulate, to conclude (tập hợp lại, tụ họp lại, kéo đến)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Offer",
//         "mean": "to propose, to present in order to meet a need or satisfy a requirement (đưa ra đề nghị)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Primary",
//         "mean": "Most important, first in a list, series, or sequence (chủ yếu, chính, bậc nhất)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Strategy",
//         "mean": "a plan of action (chiến lược)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "strategic",
//         "mean": "(a) (thuộc) chiến lược",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Substitute",
//         "mean": "to take the place of another (thế, thay thế)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Attend",
//         "mean": "to go to, to pay attention to (dự, có mặt)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Attendee",
//         "mean": "(n) người tham dự",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "attendance",
//         "mean": "(n) sự tham dự",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Get in touch",
//         "mean": "(v) to make contact with (giu lien lạc)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Hold",
//         "mean": "to accommodate; to conduct (tổ chức, tiến hành)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Location",
//         "mean": "(n) a position or site (vị trí)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Accommodate",
//         "mean": "to fit, to provide with something needed (điều tiết, làm cho thích nghi, làm cho phù hợp)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Accommodating",
//         "mean": "(adj) điều tiết, thuận tiện, tiện lợi; dễ dãi, dễ tính",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Accommodation",
//         "mean": "(n) nhà trọ, chổ ở, nơi ăn nghỉ",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Overcrowded",
//         "mean": "too crowded (kéo vào quá đông, dồn vào quá đông)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Arrangement",
//         "mean": "the plan or organization (sự sắp xếp, sự sắp đặt, cái được sắp xếp, cái được sắp đặt)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Register",
//         "mean": "(v) to record (đăng ký)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Registration",
//         "mean": "sự đăng ký",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Association",
//         "mean": "an organization of persons or groups having a common interest (hội, hội liên hiệp; đoàn thể, công ty)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Select",
//         "mean": "to choose from a group (chọn, lựa chọn)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Take part in",
//         "mean": "(v) tham gia, tham dự",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Access",
//         "mean": "to obtain, to gain entry (truy cập, đường vào)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Allocate",
//         "mean": "to designate for a specific purpose (chỉ định, chia phần, cấp phát)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Compatible",
//         "mean": "able to function together (tương tác, thích ứng)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Delete",
//         "mean": "to remove; to erase (xóa)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Display",
//         "mean": "what is visible on a monitor; v, to show (trình bày, trưng bày)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Duplicate",
//         "mean": "to produce something equal; to make identical (bản sao, gấp đôi)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Fail",
//         "mean": "not to succeed; not to work correctly (trượt, không thành công)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Failure",
//         "mean": "(n) sự thất bại",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Fallible",
//         "mean": "(adj) có thể sai lầm; có thể là sai",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Figure out",
//         "mean": "(v) to understand , to solve (chỉ ra, hiểu ra)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Ignore",
//         "mean": "not to notice; to disregard (bỏ qua, lờ đi)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Search",
//         "mean": "to look for; n, investigation (tìm kiếm, tìm hiểu)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Warn",
//         "mean": "to alert; to tell about a danger or problem (cảnh báo)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Warning",
//         "mean": "(n) lời cảnh cáo, lời răn",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Shut down",
//         "mean": "to turn off; to cease operation (đóng lại, ngừng lại)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Affordable",
//         "mean": "able to be paid for; not too expensive (hợp lý, giá cả phải chăng)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "As needed",
//         "mean": "as necessary (cần thiết)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Be in charge",
//         "mean": "to be in control or command of (có tráchnhiệm, nghĩa vụ)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Capacity",
//         "mean": "the ability to contain or hold; the maximum that something can hold (sức chứa, khả năng)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Durable",
//         "mean": ", sturdy, strong, lasting (lâu bền)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Initiative",
//         "mean": "the first step; an active role (sáng kiến)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Physical",
//         "mean": ", perceived by the senses (vật chất, điều gì đó liên quan đến tự nhiên)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Provider",
//         "mean": "(n) nhà cung cấp",
//         "type": "none",
//         "learnNum": 1
//     },
//     {
//         "vocabulary": "Recur",
//         "mean": "to occur again or repeatedly (tái diễn, tái hiện)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Recurrence",
//         "mean": "(n) sự tái diễn, tái hiện",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Recurring",
//         "mean": "(adj) tái diễn, tái hiện; lại diễn ra; có định kỳ",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Reduction",
//         "mean": "a lessening , a decrease (thu nhỏ, giảm bớt)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Reduce",
//         "mean": "(v) giảm, giảm bớt, hạ",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Reducible",
//         "mean": "(a) có thể giảm bớt",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Stay on top",
//         "mean": "to know what is going on; to know the latest information (cập nhật)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Stock",
//         "mean": "a supply; v, to keep on hand (dự trữ, cổ phần)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Appreciate",
//         "mean": "to recognize, understand the importance of; to be thankful for (đánh giá cao)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Appreciation",
//         "mean": "(n) sự đánh giá đúng, sự đánh giá cao, sự hiểu rõ giá trị",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Bring in",
//         "mean": "to hire or recruit; to cause to appear",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Casual",
//         "mean": "informal (thân mật, không nghi thức)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Code",
//         "mean": "rules of behavior (bộ luật, quy luật)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Be exposed to",
//         "mean": "to become aware of; to gain experience in",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Glimpse",
//         "mean": "a quick look (lướt qua, thoáng qua)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Made of",
//         "mean": ", to consist of (tạo nên)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Out of",
//         "mean": "no longer having, missing (hết, mất)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Outdated",
//         "mean": "a, obsolete; not currently in use (hết hạn)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Practice",
//         "mean": "to repeat in order to learn (tập luyện)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "practical",
//         "mean": "thực tế, thiết thực",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Reinforce",
//         "mean": "to strengthen, support (tăng cường, củng cố; tăng viện; tăng thêm sức mạnh)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Reinforcement",
//         "mean": "noun of Reinforce (sự tăng cường, sự củng cố; sự tăng viện)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Verbal",
//         "mean": "oral (bằng lời nói )",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Verbalize",
//         "mean": "(v) diễn tả bằng lời nói",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Disk",
//         "mean": "an object used to store digital information (đĩa máy tính)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Facilitate",
//         "mean": "to make easier (làm cho dễ dàng, thuận tiện)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Network",
//         "mean": "an interconnected group or system (mạng lưới)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Popularity",
//         "mean": "the state of being widely admired, sought (tính đại chúng, phổ biến)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Popularize",
//         "mean": "(v) đại chúng hóa; truyền bá, phổ biến",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Process",
//         "mean": "a series of operations or actions to bring about a result (quy trình)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Replace",
//         "mean": "to put back in a former place or position (đặt lại chỗ cũ, thay thế)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "replaceable",
//         "mean": "có thể thay thế",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Revolution",
//         "mean": "a sudden or momentous change in a situation (cuộc cách mạng, quay vòng)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Revolutionize",
//         "mean": "verb cách mạng hóa",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Revolutionary",
//         "mean": "adj of revolution (mang tính cách mạng)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Sharp",
//         "mean": "abrupt or acute; smart (rõ rệt, sắc nét; thông minh, sắc sảo)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Skill",
//         "mean": "developed ability (kỹ năng)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Software",
//         "mean": "the programs for a computer (phần mềm)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Storage",
//         "mean": "the safekeeping of goods or information (kho, sự dự trữ)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Store",
//         "mean": "lưu trữ",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Technical",
//         "mean": "a. special skill or knowledge (Kỹ thuật)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "technicality",
//         "mean": "n. chi tiết kỹ thuật",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Assemble",
//         "mean": "to put together; to bring together (thu thập, lắp ráp)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Beforehand",
//         "mean": "early, in advance (sẵn sàng trước)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Complicated",
//         "mean": "not easy to understand (phức tạp)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Courier",
//         "mean": "a messenger (người đưa thư, đưa tin)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Express",
//         "mean": "fast and direct (nhanh, hỏa tốc, tốc hành)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Fold",
//         "mean": "to bend paper (gấp lại, gấp nếp lại)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Layout",
//         "mean": "a format; the organization of material on a page (Sự bố trí trang giấy)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Mention",
//         "mean": "to refer to; n, something read or written (đưa ra, đề cập đến)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Mentionable",
//         "mean": "adj of mention (đáng kể, đáng đề cập)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Petition",
//         "mean": "a formal, written request; v, to make a formal request (lời thỉnh cầu, đề nghị)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Proof",
//         "mean": "to look for errors (dò lỗi, review)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Proofreader",
//         "mean": "Người soát lỗi, người review",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Registered",
//         "mean": "recorded and tracked (đã đăng ký, được bảo đảm (thư))",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Revise",
//         "mean": "to rewrite (sửa lại, bản sửa)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Abundant",
//         "mean": "plentiful, in large quantities; n, a large number (phong phú, nhiều)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Accomplishment",
//         "mean": "an achievement, a success (Việc đã hoàn thành, thành quả, thành tựu, thành tích)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Accomplish",
//         "mean": "Hoàn thành, làm xong, làm trọn",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Bring together",
//         "mean": "to join, to gather ( gom lại; nhóm lại, họp lại)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Candidate",
//         "mean": "one being considered for a position, office (thí sinh, ứng viên, ứng cử viên)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Come up with",
//         "mean": "to plan, to invent, to think of (lên kế hoạch, ý định)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Commensurate",
//         "mean": "in proportion to, corresponding, equal to (( + to, with) tương xứng với)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Match",
//         "mean": "a fit, a similarity (vừa)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Profile",
//         "mean": "a group of characteristics or traits (Tiểu sử sơ lược; mô tả sơ lược)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Qualification",
//         "mean": "requirements, qualities, or abilities needed for something (Phẩm chất, năng lực, )",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Qualify",
//         "mean": "(Đủ tư cách, khả năng, điều kiện)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Recruit",
//         "mean": "to attract people to join an organization of a cause (tuyển dụng)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Submit",
//         "mean": "to present for consideration (gửi, nộp)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Submission",
//         "mean": "= submittal, noun of submit",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Time-consuming",
//         "mean": "taking up a lot of time, lengthy (cần nhiều thời jan)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Ability",
//         "mean": "a skill, a competence (năng lực, khả năng)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Apply",
//         "mean": "to look for; to submit an application (Xin việc, tìm việc)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Applicant",
//         "mean": "người nộp đơn xin việc, ứng viên",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Background",
//         "mean": "a person’s experience, education, and family history (kinh nghiệm)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Be ready for",
//         "mean": "to be prepared ( sẵn sàng cho…)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Call in",
//         "mean": "to request (yêu cầu, ,mời tới)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Confidence",
//         "mean": "a belief in one’s ability (sự tự tin)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Constantly",
//         "mean": "on a continual basis, happening all the time (liên tục, luôn luôn, không đổi)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Expert",
//         "mean": "a specialist (nhà chuyên môn, chuyên sâu, thành thạo)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "expertise",
//         "mean": "(n) sự thành thạo, sự tinh thông",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Follow up",
//         "mean": "to take additional steps, to continue (tiếp tục, tiếp theo)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "hesitate",
//         "mean": "(v) ngập ngừng, do dự; ngần ngại",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "hesitant",
//         "mean": "(a) do dự, ngập ngừng, lưỡng lự, không nhất quyết",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "hesitation",
//         "mean": "(n) sự do dự, sự ngập ngừng, sự lưỡng lự, sự không nhất quyết",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Present",
//         "mean": "to introduce, to show, to offer for consideration (trình bày, giới thiệu)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "presentable",
//         "mean": "a. looking suitable or good enough, especially in the way you are dressed (chỉnh tề, coi được)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "weakness",
//         "mean": "(n) nhược điểm, điểm yếu..",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Conduct",
//         "mean": "to hold, to take place, to behave (tổ chức, diễn ra; hạnh kiểm, cách cư xử)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "conductor",
//         "mean": "(n) người bán vé (xe điện, xe buýt,...); người chỉ huy, người điều khiển",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "generate",
//         "mean": "to create, to produce ,tạo ra, sinh ra",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "generator",
//         "mean": "(n) a machine that produces something, especially electricity (máy sinh, máy phát; máy phát điện)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "hire",
//         "mean": "(v) to employ (n) an employee (thuê, tuyển)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Keep up with",
//         "mean": "to stay equal with (theo kịp)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Look up to",
//         "mean": "to admire, to think highly of (Khâm phục, ngưỡng mộ)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "mentor",
//         "mean": "người hướng dẫn",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "On track",
//         "mean": "oa. on schedule; focused (Theo lịch trình, đúng tiến độ; tập trung)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "reject",
//         "mean": "to turn down, to say no, to not accept ( từ chối )",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Set up",
//         "mean": "to establish, to arrange; a , arranged (thiết lập, tạo dựng)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Succeed",
//         "mean": "v. thành công",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "success",
//         "mean": "(n) sự thành công, sự thắng lợi",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "successful",
//         "mean": "(a) có kết quả, thành công, thắng lợi, thành đạt",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "base",
//         "mean": "v. (+ sth on sth) dựa vào, căn cứ vào",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "basis",
//         "mean": "n. a base or foundation (nền tảng, cơ sở)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Be aware of",
//         "mean": "(v) biết, nhận thấy, nhận thức thấy",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Benefit",
//         "mean": "(n) tiền trợ cấp, phúc lợi (v) giúp ích cho, làm lợi cho",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "beneficial",
//         "mean": "(a) có ích, có lợi, tốt",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "compensate",
//         "mean": "v. (+ s.o for sth) bù, đền bù, bồi thường",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Compensation",
//         "mean": "(n) sự đền bù, sự bồi thường",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "compensatory",
//         "mean": "adj bù đắp, bồi thường",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Delicate",
//         "mean": "lịch thiệp, khéo (trong cách đối xử), nhã nhặn, tế nhị, ý tứ",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "eligible",
//         "mean": "đủ tư cách, thích hợp",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "flexible",
//         "mean": "(a) Linh động, linh hoạt",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "negotiate",
//         "mean": "(v) đàm phán, thương lượng",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Negotiation",
//         "mean": "(n) sự đàm phán, sự thương lượng",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "negotiator",
//         "mean": "(n) người đàm phán, người thương lượng",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "raise",
//         "mean": "n. an increase in salary; v. to move up",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "retire",
//         "mean": "v. về hưu",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Retirement",
//         "mean": "sự về hưu",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "vested",
//         "mean": "được quyền, được phép",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Wage",
//         "mean": "tiền công, tiền lương ̣(compare: Salary)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "achieve",
//         "mean": "giành được, hoàn thành",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Achievement",
//         "mean": "noun sự giành được, hoàn thành",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "achiever",
//         "mean": "người thành đạt, thành công",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Contribute",
//         "mean": "đóng góp, góp phần",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "contribution",
//         "mean": "sự đóng góp",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "contributor",
//         "mean": "người góp phần",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Dedication",
//         "mean": "(n) sự cống hiến, sự hiến dâng",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "dedicate",
//         "mean": "(v) cống hiến, hiến dâng",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "dedicated",
//         "mean": "(a) tận tụy, tận tâm",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Look forward to",
//         "mean": "(v) chờ đợi, mong đợi",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Look to",
//         "mean": "(v) trông chờ vào, phụ thuộc vào",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Loyal",
//         "mean": "(a) trung thành",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "loyalty",
//         "mean": "(n) sự trung thành, lòng trung thành",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "merit",
//         "mean": "(n) giá trị, công lao, công trạng",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Obvious",
//         "mean": "(a) rõ ràng, rành mạch, hiển nhiên",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Productive",
//         "mean": "a. useful, getting a lot done (thực hiện được nhiều, hữu ích, có năng suất)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Promote",
//         "mean": "(v) đề đạt, tiến cử",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "promotion",
//         "mean": "(n) sự thăng chức, thăng tiến",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "promoter",
//         "mean": "(n) người đề nghị, tiến cử",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "recognition",
//         "mean": "(n) sự công nhận, sự thừa nhận",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Value",
//         "mean": "v. to state the worth (định giá, đánh giá)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "pension",
//         "mean": "(n) lương hưu, tiền trợ cấp; (v) trả lương hưu, trợ cấp cho",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "produce",
//         "mean": "(v) sản xuất",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "praise",
//         "mean": "(v) (n) khen ngợi, ca ngợi, ca tụng, tán tụng, tán dương",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Bargain",
//         "mean": "(v) mặc cả, thương lượng; (n) sự mặc cả, món hời",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Bear",
//         "mean": "v, to have a tolerance for, to endure (chịu đựng)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Behavior",
//         "mean": "n, the manner of one’s action (cách ứng xử, đối xử)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Checkout",
//         "mean": "n, the act, time, or place of checking out, as at a hotel or a supermarket (thanh toán, quầy thanh toán)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Comfort",
//         "mean": "n, a condition or feeling of pleasurable ease, well-being, and contentment (thỏai mái, dễ dàng)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Comfortable",
//         "mean": "adj, thỏai mái, dễ dàng",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Expand",
//         "mean": "v, to increase the size, volume, quantity, or scope of; to enlarge (mở rộng, phát triển)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Expansion",
//         "mean": "n. sự mở rộng, sự bành trướng",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Expanded",
//         "mean": "adj. nới rộng",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Explore",
//         "mean": "v,to investigate systematically (khám phá, thăm dò, thám hiểm)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Exploration",
//         "mean": "n. sự thăm dò, sự khảo sát",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Exploratory",
//         "mean": "adj. để thăm dò, để khảo sát",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Item",
//         "mean": "n,a single article or unit (mặt hàng, món)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Mandatory",
//         "mean": "a, required or commanded, obligatory (bắt buộc)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Merchandise",
//         "mean": "n, items available in stores (hàng hóa mua bán); (v) buôn bán, quảng bá sản phẩm",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Strict",
//         "mean": "a, precise. Exact (chính xác, chặt chẽ, nghiêm ngặt)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Strictness",
//         "mean": "n, sự chặt chẽ, tính chính xác, nghiêm ngặt",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Trend",
//         "mean": "n, the current style (xu hướng, xu thế)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "mandate",
//         "mean": "(n) (v) chỉ thị, yêu cầu",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "merchant",
//         "mean": "(n) nhà buôn, lái buôn; thương gia",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Diverse",
//         "mean": "adj. đa dạng",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Diversify",
//         "mean": "v. đa dạng hóa",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Diversity",
//         "mean": "n. sự đa dạng",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Enterprise",
//         "mean": "n. a businesss; a large project (Công trình dự án lớn; tổ chức kinh doanh, hãng)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Essential",
//         "mean": "adj. cần thiết, thiết yếu, cốt yếu, chủ yếu; n. yếu tố cần thiết",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Everyday",
//         "mean": "thông thường, tầm thường, chuyện xảy ra hàng ngày",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Function",
//         "mean": "(v) vận hành (n) chức năng, trách nhiệm",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "functional",
//         "mean": "adj chức năng, trách nhiệm",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Maintain",
//         "mean": "v. duy trì",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Maintainability",
//         "mean": "noun sự duy trì, bảo trì",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "maintainable",
//         "mean": "adj. có thể duy trì",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Obtain",
//         "mean": "v. đạt được, có được",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Prerequisite",
//         "mean": "n. điều kiện trước hết, điều kiện tiên quyết",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Quality",
//         "mean": "chất lượng, phẩm chất",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Smooth",
//         "mean": "a. êm thấm, suôn sẻ; hòa nhã, lệ độ; ngọt xớt",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Smooth out",
//         "mean": "v. Làm cho suôn sẻ",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Stationery",
//         "mean": "n. đồ dùng văn phòng",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "enterprising",
//         "mean": "adj. good at thinking of and doing new and difficult things, especially things that will make money (dám làm; mạnh dạn)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "essence",
//         "mean": "bản chất, thực chất",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Accurate",
//         "mean": "a, exact; errorless (đúng, chính xác)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Accuracy",
//         "mean": "n. sự chính xác",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Accurately",
//         "mean": "adv. một cách chính xác",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Carrier",
//         "mean": "n, a person or business that transports passengers or goods (người hoặc một hãng vận chuyển)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Catalog",
//         "mean": "= catalogue (n) quyển danh mục hàng, bảng giá; (v) to make an itemized list of",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Fulfill",
//         "mean": "v, to finish completely (thực hiện, hoàn thành, làm trọn (nhiệm vụ...))",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Fulfilment",
//         "mean": "n. sự hoàn thành, sự thực hiện",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Integral",
//         "mean": "a, necessary for completion (cần thiết, ko thể thiếu)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Inventory",
//         "mean": "n, goods in stock; an itemized record of these goods ( bảng kê (hàng hóa) )",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Minimize",
//         "mean": "v, to reduce, to give less importance to (giảm tới mức tối thiểu)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Minimal",
//         "mean": "adj. Minimum n. (tối thiểu)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "On hand",
//         "mean": "a, available (sẵn sàng, sẵn có)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Remember",
//         "mean": "v, to think of again (nhớ, nhớ lại)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Ship",
//         "mean": "v, to transport; to send (vận chuyển)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Shipper",
//         "mean": "n.người ship",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "shipment",
//         "mean": "n. (việc gửi hàng)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Sufficient",
//         "mean": "a, as much as is needed (vừa đủ)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Supply",
//         "mean": "v, to make available for use (cung cấp) (n) stock (nguồn dự trữ)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Charge",
//         "mean": "n, an expense or a cost; v, to demand payment (thu phí)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Compile",
//         "mean": "v, to gather together from several sources (thu thập, biên soạn)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Customer",
//         "mean": "n, one who purchases a commodity or service (khách hàng)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Discount",
//         "mean": "n, a reduction in price; to reduce in price (giảm giá)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Efficient",
//         "mean": "a, acting or producing effectively with a minimum of waste (có hiệu lực, hiệu quả)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Estimate",
//         "mean": "v, to approximate the amount or value of something; to form am opinion About something (ước lượng. định giá)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Estimation",
//         "mean": "a judgement or opinion about the value or quality of somebody/something",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Impose",
//         "mean": "v, to establish or apply as compulsory; to force upon others (áp đặt, ép buộc, bắt ai phải làm gì đó)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Imposition",
//         "mean": "n. imposing adj. (đánh thuế ai đó, sự áp đặt, bắt buộc)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Mistake",
//         "mean": "n, an error or a fault (lỗi)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Mistaken",
//         "mean": "adj. sai lầm; hiểu sai, hiểu lầm",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Order",
//         "mean": "n, a request made to purchase something ; v, to command or direct (đơn đặt hàng; ra lệnh, chỉ huy)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Prompt",
//         "mean": "adj, v : be on time or punctual, carried out without delay, n. a reminder or a cue (mau lẹ, nhanh chóng; ngay, ngay tức thì, tức thời)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Promptness",
//         "mean": "n. sự mau lẹ, sự nhanh chóng",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Rectify",
//         "mean": "v. to set right or correct ( khắc phục, chỉnh sửa )",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Term",
//         "mean": "n. conditions (điều khoản; giá; điều kiện)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Adjust",
//         "mean": "v. to change in order to match or fit, to cause to correspond (điều chỉnh, dàn xếp )",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Adjustment",
//         "mean": "n. sự điều chỉnh, sự dàn xếp",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Adjustable",
//         "mean": "adj. có thể điều chỉnh, dàn xếp",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Automatic",
//         "mean": "adj. Operating independently (tự động)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Automation",
//         "mean": "n. sự tự động",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Automatically",
//         "mean": "adv. trạng thái tự động",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Crucial",
//         "mean": "adj. Extremely significant or important (quyết định; cốt yếu, chủ yếu)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Discrepancy",
//         "mean": "n. a divergence or disagreement (sự khác nhau, sự ko thống nhất, sự ko nhất quán)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Disturb",
//         "mean": "v. to interfere with, to interrupt (làm phiền)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Disturbance",
//         "mean": "n. sự náo động; kẻ quấy rầy",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Liability",
//         "mean": "n. an obligation a responsibility (trách nhiệm pháp lý; cái gây khó khăn trở ngại)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Reflect",
//         "mean": "v. to given back a likeness (phản chiếu, phản ánh)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Reflection",
//         "mean": "n. sự phản ánh, sự phản chiếu",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Reflector",
//         "mean": "n. gương phản xạ, vật phản xạ",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Run",
//         "mean": "v. to operate (chạy, hoạt động)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Scan",
//         "mean": "v. to look over quickly (xem lướt, xem qua)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Subtract",
//         "mean": "v. to take away, to deduct (trừ đi, khấu trừ)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Tedious",
//         "mean": "adj. Tiresome by reason of length, slowness, or dullness, boring (chán ngăt, buồn tẻ)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Verify",
//         "mean": "v. to prove the truth of (Xác minh, kiểm lại)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Accept",
//         "mean": "v. to receive, to respond favorably (đồng ý, chấp thuận)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Acceptance",
//         "mean": "n. sự đồng ý, chấp thuận",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Acceptable",
//         "mean": "adj. có thể đồng ý, chấp thuận",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Balance",
//         "mean": "n. the remainder, v. to compute the difference between credits and debits of an account.(Số dư (tài khoản))",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Borrow",
//         "mean": "v. to use temporarily (vay mượn)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Cautious",
//         "mean": "adj. Careful, wary (thận trọng, cẩn thận)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Deduct",
//         "mean": "v. to take away from a total, to subtract (khấu trừ). Synonym: Subtract",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Deductible",
//         "mean": "adj có thể khấu trừ",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Deduction",
//         "mean": "n. sự khấu trừ",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Dividend",
//         "mean": "n. a share in a distribution (Cổ tức - khoản tiền được chia cho các cổ đông; lãi cổ phần).",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Down payment",
//         "mean": "n. an initial partial payment (Sự trả trước 1 phần khi mua hàng).",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Mortgage",
//         "mean": "n. the amount due on a property, v. to borrow money with your house as collateral.(cầm cố, thế chấp)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Restriction",
//         "mean": "n. a limitation (sự giới hạn,hạn chế).",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Restrict",
//         "mean": "v. hạn chế, giới hạn, thu hẹp",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Restricted",
//         "mean": "adj. Bị hạn chế, có giới hạn",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Signature",
//         "mean": "n. the name of a person written by the person (chữ ký)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Sign",
//         "mean": "v. ký",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Take out",
//         "mean": "v. withdraw, remove (rút tiền)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Transaction",
//         "mean": "n. a business deal (giao dịch; sự giải quyết công việc)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Accounting",
//         "mean": "n. the recording and gathering of financial information for a company (công việc kế toán)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Accountant",
//         "mean": "n. (nhân viên kế toán)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Accumulate",
//         "mean": "v. to gather, to collect (tích lũy, gom góp).",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Accumulation",
//         "mean": "n. sự tích lũy, sự góp nhặt",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Accumulated",
//         "mean": "adj. tích lũy",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Asset",
//         "mean": "n. something of value (tài sản)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Audit",
//         "mean": "n. a formal examination of financial records, v. to examine the financial (kiểm toán)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Budget",
//         "mean": "(n) ngân quỹ, ngân sách. (v) ghi vào ngân sách",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Budgetary",
//         "mean": "(adj) thuộc về ngân quỹ, ngân sách",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Build up",
//         "mean": "n. to increase over time (Sự tăng cường)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Client",
//         "mean": "n. a customer (khách hàng)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Debt",
//         "mean": "n. something owed, as in money or goods (khỏan nợ)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Outstanding",
//         "mean": "adj. Still due, not paid or settled (còn tồn tại, chưa giải quyết xong, chưa trả nợ).",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Profitable",
//         "mean": "adj. advantageous, beneficial (có sinh lời).",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Profit",
//         "mean": "v. n. (lợi nhuận, thu hồi).",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Reconcile",
//         "mean": "v. to make consistent (1.giải hòa, giảng hòa; 2.điều hòa, 3.đành cam chịu)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Turnover",
//         "mean": "n. 1.doanh thu, 2. vốn luân chuyển, 3.số công nhân thôi việc",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Aggressive",
//         "mean": "adj. Competitive, assertive (gây hấn, hung hăng, hùng hỗ)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Attitude",
//         "mean": "n. a felling about something or someone (thái độ, quan điểm)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Commitment",
//         "mean": "n. a promise ( sự thỏa thuận,sự thỏa ước, sự cam kết)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Commit",
//         "mean": "v. thỏa thuận, thỏa ước, cam kết",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Noncommittal",
//         "mean": "adj. không hứa hẹn, cam kết",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Conservative",
//         "mean": "adj. Cautious, restrained (dè dặt, thận trọng; bảo thủ)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Fund",
//         "mean": "n. an amount of money for something specific, v to provide money for (nguồn tiền, quỹ dự trữ).",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Invest",
//         "mean": "v. to put money into a business or activity with the hope of making more money, to put effort into something (đầu tư)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Investment",
//         "mean": "n. Sự đầu tư",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Investor",
//         "mean": "n. Người đầu tư, nhà đầu tư",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Long-term",
//         "mean": "adj. involving or extending over a long period (dài hạn)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Portfolio",
//         "mean": "n. a list of investments (danh mục vốn đầu tư)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Pull-out",
//         "mean": "v. to withdraw, to stop participating, n. a withdrawal, removal (rút tiền, rút lui)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Resource",
//         "mean": "n. assets, valuable things (nguồn, tài nguyên)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Return",
//         "mean": "n. the amount of money gained as profit (tiền thu về, tiền lãi)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Returnable",
//         "mean": "adj. được trả lại, có thể trả lại",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Wise",
//         "mean": "adj. Knowledgeable, able to offer advice based on experience (Từng trải hiểu biết nhiều, khôn ngoan, sáng suốt).",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Wisdom",
//         "mean": "n. Sự khôn ngoan, sáng suốt",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Wisely",
//         "mean": "adv. một cách khôn ngoan",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Calculate",
//         "mean": "v. to figure out, to compute (tính toán)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Calculation",
//         "mean": "n, phép tính",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Calculator",
//         "mean": "n. máy tính",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Deadline",
//         "mean": "n. a time by which something must be finished (hạn cuối)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "File",
//         "mean": "v. to enter into public record, n. a group of documents or information about a person or an event (sắp xếp, sắp đặt tài liệu)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Fill out",
//         "mean": "v. to complete (hoàn tất, hoàn thành)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Give up",
//         "mean": "v. to quit, to stop (đầu hàng, tạm dừng, tạm ngưng)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Joint",
//         "mean": "adj. together; shared (chung (giữa hai hay nhiều người))",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Owe",
//         "mean": "v. to have a debt; to be obligated to pay (nợ, cần phải trả)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Owner",
//         "mean": "n. người chủ, chủ nhân",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Penalty",
//         "mean": "n. a punishment, a consequence (khoản tiền phạt, hình phạt)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Penalize",
//         "mean": "v. trừng trị, trừng phạt",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "penal",
//         "mean": "adj. (thuộc) hình phạt; (thuộc) hình sự",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Prepare",
//         "mean": "v. to make ready (chuẩn bị)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Preparation",
//         "mean": "n. sự chuẩn bị",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Preparatory",
//         "mean": "adj. để sửa soạn, để chuẩn bị, để dự bị",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Refund",
//         "mean": "n. the amount paid back, v, to give back (trả lại, hoàn trả)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Spouse",
//         "mean": "n. a husband or wife (vợ hoặc chồng)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Withhold",
//         "mean": "v. to keep from. To refrain from (giấu, giữ lại)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Desired",
//         "mean": "adj. Wished or longed for (thèm muốn; mong muốn, ao ước, khát khao, mơ ước)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Desire",
//         "mean": "v. to wish for (thèm muốn; mong muốn, ao ước, khát khao, mơ ước)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Detail",
//         "mean": "v. to report or relate minutely or in particulars (kể chi tiết, trình bày tỉ mỉ)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Forecast",
//         "mean": "n, a prediction of a future event .v. to estimate or calculate in advance (dự đoán, dự báo trước)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Level",
//         "mean": "n. a relative position or rank on a scale (mức độ, hạng)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Overall",
//         "mean": "adj. Regarded as a whole, general (tòan bộ, tổng thể, tất cả)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Perspective",
//         "mean": "n. a mental view or outlook (viễn cảnh, triển vọng; tương lai, tiến độ)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Projected",
//         "mean": "adj. Estimated, or predicted based on present data",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Project",
//         "mean": "n. dự án",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Reality",
//         "mean": "n. sự thật",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Realistic",
//         "mean": "adj. (thực tế, hiện thực)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Target",
//         "mean": "v. to establish as a goal, n. a goal (mục tiêu)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Translation",
//         "mean": "n. the act or process of translating (bản dịch, bài dịch)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Translate",
//         "mean": "v. dịch",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Translatable",
//         "mean": "adj. có thể dịch được",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Typical",
//         "mean": "adj. Conforming to a type (tiêu biểu, điển hình; đặc thù, đặc trưng)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Yield",
//         "mean": "n. an amount produced, v. to produce a profit (lợi nhuận, lợi tức; sinh lợi)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Adjacent",
//         "mean": "adj. next to (gần kề, kế liền, sát ngay)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Collaboration",
//         "mean": "n. the act of working with someone (sự hợp tác, cộng tác)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Collaborate",
//         "mean": "v. (+with sb) (on sth) hợp tác, cộng tác",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Concentrate",
//         "mean": "v. to focus, to think about (trọng tâm, tập trung)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Conducive",
//         "mean": "adj. Contributing to, leading to ( có lợi, thuận lợi )",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Disrupt",
//         "mean": "v. to interrupt, to disturb (phá vỡ, quấy rối)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Disruption",
//         "mean": "n. interruption, disturbance (sự phá vỡ, sự quấy rối)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Disruptive",
//         "mean": "adj. phá vỡ, quấy rối",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Hamper",
//         "mean": "v. to impede or interfere (ngăn trở, cản trở)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Inconsiderate",
//         "mean": "adj. Rude, impolite. (thiếu chu đáo, thiếu thận trọng, khinh suất)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Lobby",
//         "mean": "n. an anteroom, foyer, or waiting room (phòng khách, phòng chờ)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Move up",
//         "mean": "v. to advance, improve position (thăng tiến, thăng chức)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Open to",
//         "mean": "adj. Receptive to, vulnerable (dễ tiếp thu, dễ lĩnh hội; dễ bị chỉ trích)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Opt",
//         "mean": "v. to choose, to decide on (+for, to, out) chọn, chọn lựa",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Option",
//         "mean": "n. (optimal > adj). something that you can choose to have or do; the freedom to choose what you do.",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Scrutinize",
//         "mean": "v. to look at carefully and closely (xem xét kỹ lưỡng, nghiên cứu cẩn thận)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Scrutiny",
//         "mean": "n. sự xem xét kỹ lưỡng, cẩn thận",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Inscrutable",
//         "mean": "adj. không thể xem xét; bí hiểm, khó hiểu",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Adhere (to something)",
//         "mean": "v. to follow, to pay attention to (Tuân thủ)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Agenda",
//         "mean": "n. a list of topics to be discussed (Những vấn đề, công việc phải bàn tại cuộc hợp)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Bring up",
//         "mean": "v. to introduce a topic (giới thiệu, đưa ra)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Conclude",
//         "mean": "v. to stop, to come to a decision (kết luận, kết thúc)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Conclusion",
//         "mean": "n. phần kết luận, kết quả",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Conclusive",
//         "mean": "adj. để kết thúc, để quyết định)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Go ahead",
//         "mean": "v. to proceed with, n. permission to do something (tiếp tục, tiến triển)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Goal",
//         "mean": "n. objective, purpose (mục tiêu, mục đích)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Lengthy",
//         "mean": "adj. Long in time, duration, or distance (dài dòng)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Matter",
//         "mean": "n. an item, issue, topic of interest (vấn đề, chủ đề)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Periodically",
//         "mean": "adv. From time to time (định kỳ)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Period",
//         "mean": "n. thời hạn, thời kỳ",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Periodic",
//         "mean": "adj. chu kỳ, định kỳ",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Priority",
//         "mean": "n. something of importance, something that should be done before other things (sự ưu tiên)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Prioritize",
//         "mean": "v. ưu tiên",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "prior",
//         "mean": "adj. ưu tiên",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Progress",
//         "mean": "n. a movement forward, v. to move forward on something, especially work or a project (sự tiến bộ, sự tiến lên)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Progression",
//         "mean": "n. sự tiến bộ, tiến triển",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Progressive",
//         "mean": "adj. tiến bộ, tiến triển",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Waste",
//         "mean": "b. not to use wisely, n. not worthwhile. (không giá trị)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Brand",
//         "mean": "n. an identifying mark or label, a trademark (nhãn, nhãn hiệu)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Conform",
//         "mean": "v. to match specifications or qualities (làm cho phù hợp)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Defect",
//         "mean": "n. an imperfection or flaw (nhược điểm)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Defective",
//         "mean": "adj. có khiếm khuyết, nhược điểm",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Enhance",
//         "mean": "v. to make more attractive or valuable (tăng, nâng cao)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Garment",
//         "mean": "n. an article of clothing (áo quần)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Inspect",
//         "mean": "v. to look at closely, to examine carefully or officially (kiểm tra, thanh tra)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Inspection",
//         "mean": "n. sự kiểm tra, sự xem xét",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Inspector",
//         "mean": "n. Người kiểm tra, thanh tra",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Perceive",
//         "mean": "v. to notice, to become aware of, to see (nhận thức, lĩnh hội)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Perception",
//         "mean": "n. sự nhận biết, nhận thức, cảm nhận",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Perceptive",
//         "mean": "adj. thuộc về tri giác",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Repel",
//         "mean": "v. to keep away, to fight against (đẩy xa, khước từ)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Repellent",
//         "mean": "n. adj. đẩy xa, khước từ",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Take back",
//         "mean": "b. to return something, to withdraw or retract (lấy lại, kéo lại)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Throw out",
//         "mean": "v. to dispose of (vứt đi, bỏ đi)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Uniform",
//         "mean": "adj. Consistent in form or appearance (Cùng 1 kiểu, không thay đổi về tính cáh hay hình thức)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Wrinkle",
//         "mean": "n. a crease, ridge, or furrow, especially in skin or fabric (nếp nhăn)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Anxious",
//         "mean": "adj. Worried (lo âu, băn khoăn)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Anxiety",
//         "mean": "n. mối lo âu",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Ascertain",
//         "mean": "v. to discover, to find out for certain (tìm hiểu một cách chắc chắn",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Assume",
//         "mean": "v. to take upon oneself, to believe to be true (cho rằng, thừa nhận)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Assumed",
//         "mean": "adj. cho rằng, thừa nhận",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Assumption",
//         "mean": "n. giả thuyết, giả định",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Decade",
//         "mean": "n. a period of ten years (thập kỷ)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Examine",
//         "mean": "v. to interrogate, to scrutinize (xem xét chi tiết)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Experiment",
//         "mean": "v. to try out a new procedure or idea, n. a test or trial (thí nghiệm, thử nghiệm)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Experimentation",
//         "mean": "n. cuộc thử nghiệm",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Experimental",
//         "mean": "adj. thử nghiệm",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Logical",
//         "mean": "adj. formally valid, using orderly reasoning (hợp lý, có lý)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Research",
//         "mean": "n. the act of collecting in formation about a particular subject (nghiên cứu)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Responsibility",
//         "mean": "n. task (bổn phận, trách nhiệm)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Responsible",
//         "mean": "adj. chịu trách nhiệm",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Responsibly",
//         "mean": "adv. có trách nhiệm",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Solve",
//         "mean": "v. to find a solution, explanation, or answer (giải quyết, làm sáng tỏ một vấn đề)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Supervisor",
//         "mean": "n. an administrator in charge (người giám sát)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Systematic",
//         "mean": "adj. Methodical in procedure, organized (có phương pháp, hệ thống)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Apprehensive",
//         "mean": "adj. Anxious about the future ( e ngại, sợ)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Apprehend",
//         "mean": "v. sợ/thấu hiểu/bắt giữ",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Apprehension",
//         "mean": "n. mối lo sợ",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Circumstance",
//         "mean": "n. a condition, a situation (tình thế, tình huống)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Condition",
//         "mean": "n. the state of something, a requirement (điều kiện)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Conditional",
//         "mean": "adj. điều kiện",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Due to",
//         "mean": "prep. Because of ( bởi vì, nguyên nhân dẫn đến cái gì)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Fluctuate",
//         "mean": "v. to go up and down, to change (dao động, thay đổi bất thường)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Fluctuation",
//         "mean": "n. fluctuating gerund. (sự giao động)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Get out of",
//         "mean": "v. to escape, to exit (thoát khỏi, rời khỏi)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Indicator",
//         "mean": "n. a sign, a signal.",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Indicate",
//         "mean": "v. chỉ ra, tỏ ra",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "indication",
//         "mean": "n. sự chỉ thị/dấu hiệu chỉ dẫn",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Lease",
//         "mean": "n. a contract to pay to use property for an amount of time, v. to make a contract to use property ( Hợp đồng cho thuê)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Lock into",
//         "mean": "v. to commit, to be unable to change (thỏa thuận ko thay đổi)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Occupancy",
//         "mean": "n. the state of being or living in a certain place (sở hữu, chiếm hữu)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Option",
//         "mean": "n. a choice, an alternative ( sự lựa chọn)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Subject to",
//         "mean": "adj. Under legal power, dependent (tùy thuộc vào cái gì đó, dựa theo cái gì đó)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Appeal",
//         "mean": "adj. to be attractive or interesting (sự hấp dẫn, thích thú)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Arrive",
//         "mean": "v. to reach a destination (tới một nơi)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Compromise",
//         "mean": "n., a settlement of differences in which each side makes concessions (sự thỏa hiệp, thỏa ước)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Daring",
//         "mean": "adj., to have the courage required (táo bạo, liều lĩnh)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Familiar",
//         "mean": "adj., often encountered or seen; common (quen thuộc, quen, tương tự)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Guide",
//         "mean": "n. one who leads, directs, or gives advice (người hướng dẫn)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Guidance",
//         "mean": "n. sự hướng dẫn",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Guidable",
//         "mean": "adj. Có thể chỉ đạo, có thể hướng dẫn, có thể dìu dắt",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Majority",
//         "mean": "n. the greater number or part (phần lớn, đa số)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Mix",
//         "mean": "v. trộn lẫn, hòa lẫn",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Mixture",
//         "mean": "n. Sự pha trộn, sự hỗn hợp",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Mixable",
//         "mean": "adj. Có thể trộn lẫn, có thể pha lẫn, có thể hoà lẫn",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Rely",
//         "mean": "v. to have confidence in; to depend on (tin cậy vào, dựa vào)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Reliability",
//         "mean": "n. Sự đáng tin cậy; tính đáng tin cậy",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Reliable",
//         "mean": "adj. Chắc chắn, đáng tin cậy; xác thực (tin tức...)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Secure",
//         "mean": "v. to get possession of; to obtain (bảo đảm)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Subjective",
//         "mean": "adj., particular to a given person; highly personal; not objective (chủ quan)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Suggest",
//         "mean": "v. to offer for consideration or action (gợi ý)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Suggestion",
//         "mean": "n. sự gợi ý",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Suggestible",
//         "mean": "adj. có thể đề nghị được",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Basic",
//         "mean": "adj., serving as a starting point or basis (cơ bản, căn bản)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Complete",
//         "mean": "adj., having all necessary or normal parts, components, or steps (đầy đủ, trọn vẹn)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Completion",
//         "mean": "n. sự hoàn thành",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Completely",
//         "mean": "adv. làm cho đầy đủ",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Excite",
//         "mean": "v. to arouse an emotion (kích động)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Excitement",
//         "mean": "n. sự phấn khích",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Exciting",
//         "mean": "adj. hứng thú, lý thú, hồi hộp",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Flavor",
//         "mean": "n. a distinctive taste (vị ngọt, mùi thơm phảng phất)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Forget",
//         "mean": "v. to be unable to remember (quên)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Forgetful",
//         "mean": "adj. cẩu thả, hay quên, trí nhớ không tốt",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Forgettable",
//         "mean": "adj. có thể quên được",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Ingredient",
//         "mean": "n. an element in a mixture (thành phần)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Judge",
//         "mean": "v. to form an opinion (đánh giá)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Mix-up",
//         "mean": "n. a confusion; v. to confuse (lẫn lộn, bối rối)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Patron",
//         "mean": "n. a customer, especially a regular customer (khách hàng quen)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Predict",
//         "mean": "v. to state, tell about, or make known in advance (dự đoán, dự báo)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Prediction",
//         "mean": "n. sự dự báo, sự dự đoán; lời dự đoán, lời tiên tri",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Predictable",
//         "mean": "adj. có thể đoán trước, có thể dự đoán, dự báo",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Random",
//         "mean": "adj. having no specific pattern, purpose, or objective (ngẫu nhiên, tình cờ)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Remind",
//         "mean": "v. to cause to remember (nhắc nhở)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Burdensome",
//         "mean": "adj. of or like a burden; onerous (nặng nề, phiền toái)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Common",
//         "mean": "adj. widespread, frequent, usual (thông thường, phổ biến)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "In common",
//         "mean": "n. điểm chung, giống",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Commonly",
//         "mean": "adv. thông thường, phổ biến",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Delivery",
//         "mean": "n. the act of conveying or delivering (giao hàng)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Elegant",
//         "mean": "adj. exhibiting refined, tasteful beauty (thanh lịch, trang nhã)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Elegance",
//         "mean": "n. sự thanh lịch",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Elegantly",
//         "mean": "adv. thanh lịch",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Fall to",
//         "mean": "v. to become one’s responsibility ( trách nhiệm được giao cho )",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Impress",
//         "mean": "v. to affect strongly, often favorably (ấn tượng)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Impression",
//         "mean": "n. sự ấn tượng",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Individual",
//         "mean": "adj. by or for one person; special; particular (cá nhân, riêng lẻ)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Individualize",
//         "mean": "v. cá nhân hóa, chỉ rõ",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Individually",
//         "mean": "adv. cá nhân, riêng lẻ",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "List",
//         "mean": "n. danh sách",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Multiple",
//         "mean": "adj. having, relating to , or consisting of more than one part (nhiều, phức tạp)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Narrow",
//         "mean": "v. to limit or restrict; adj., limited (chật hẹp, hạn chế)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Pick up",
//         "mean": "v. to take on passengers or freight (đón (ai đó))",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Settle",
//         "mean": "v. to make compensation for, to pay; to choose (định cư, ổn định)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Accustom to",
//         "mean": "v. to become familiar with, to become used to (làm quen với cái gì)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Apprentice",
//         "mean": "n. a student worker in a chosen field (tập sự, người mới vào nghề)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Apprenticeship",
//         "mean": "n. sự tập sự, học nghề",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Culinary",
//         "mean": "adj. relating to the kitchen or cooking (việc bếp núc)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Demanding",
//         "mean": "adj. requiring much effort or attention (Đòi hỏi khắt khe)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Draw",
//         "mean": "v. to cause to come by attracting (kéo, lôi kéo)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Incorporate",
//         "mean": "v. to unite one thing with something else already in existence (sát nhập chặt chẽ)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Incorporation",
//         "mean": "n. sự kết hợp, cộng tác",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Influx",
//         "mean": "n. a flowing in (dòng chảy vào)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Method",
//         "mean": "n. a procedure (phương pháp, cách thức)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Methodology",
//         "mean": "n. phương pháp luận",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Methodical",
//         "mean": "adj. có phương pháp",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Outlet",
//         "mean": "n. a means of release or gratification, as for energies, drives, or desires (lối ra, lối thoát)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Profession",
//         "mean": "n. an occupation requiring considerable training and specialized study (nghề nghiệp)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Professional",
//         "mean": "adj. chuyên nghiệp",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Professionally",
//         "mean": "adv. một cách chuyên nghiệp",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Relinquish",
//         "mean": "v. to let go; to surrender (từ bỏ)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Theme",
//         "mean": "n. an implicit or recurrent idea; a motif (chủ đề, đề tài)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Assist",
//         "mean": "v. to give help or support to ( trợ giúp, hỗ trợ )",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Assistance",
//         "mean": "n. sự giúp đỡ, người giúp việc",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Assistant",
//         "mean": "n. trợ lý",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Coordinate",
//         "mean": "v. to adjust or arrange parts to work together (sắp xếp, sẳp đặt)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Dimension",
//         "mean": "n. a measure of width, height, or length (kích thước)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Exact",
//         "mean": "adj. characterized by accurate measurements or inferences (chính xác)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "General",
//         "mean": "adj. involving only the main feature rather than precise details (hầu hết, phổ biến)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Generalize",
//         "mean": "v. khái quát hóa, tổng quát hóa",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Generally",
//         "mean": "adv. đại khái, chung chung",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Ideal",
//         "mean": "adj. imaginary; existing as a perfect model (quan niệm, tưởng tượng, mẫu hình lý tưởng)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Idealize",
//         "mean": "v. lý tưởng hóa, theo lý tưởng",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Lead time",
//         "mean": "n. the time between the initial stage of a project and the appearance of results (khoảng thời gian giữa lúc bắt đầu và lúc hoàn thành một quá trình sx mới)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Plan",
//         "mean": "n. kế hoạch",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Proximity",
//         "mean": "n. the state, quality, sense, or fact of being near or next to; closeness (sự gần gũi)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Regulation",
//         "mean": "n. rules, laws, or controls; v., to control (sự điều chỉnh, qui tắc, điều lệ)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Regulate",
//         "mean": "v. điều chỉnh",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Regulatory",
//         "mean": "adj. điều chỉnh, quy định",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Site",
//         "mean": "n. a place or setting (vị trí, địa điểm)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Stage",
//         "mean": "v. to exhibit or present (Trình diễn)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Agency",
//         "mean": "n., an establishment engaged in doing business (đại lý)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Announcement",
//         "mean": "n. a public notification (sự thông báo)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Announce",
//         "mean": "v. thông báo",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Announcer",
//         "mean": "n. người thông báo",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Beverage",
//         "mean": "n. a drink other than plain water (đồ uống, thức uống)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Blanket",
//         "mean": "n. a covering for keeping warm, especially during sleep; any full coverage; v., to cover uniformly (Mền, chăn)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Board",
//         "mean": "v. to enter a boat, plane, or train; to furnish to see the roads v.,(lên tàu)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Onboard",
//         "mean": "adj. trên tàu",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Claim",
//         "mean": "v. to take as rightful; to retrieve (đòi hỏi, quyền yêu sách)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Delay",
//         "mean": "v. n. trì hoãn",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Embark",
//         "mean": "v. to go onboard a flight or ship; to begin (Lên tàu)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Itinerary",
//         "mean": "n. a proposed rout for a journey, showing dates and means of travel (lịch trình bay)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Prohibit",
//         "mean": "v. to forbid by authority or to prevent (ngăn cấm, ngăn chặn)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Valid",
//         "mean": "adj. having legal efficacy or correctness (hiệu lực)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Validate",
//         "mean": "v. chứng thực, xác nhận",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Validation",
//         "mean": "n. sự chứng thực, xác nhận",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Deal with",
//         "mean": "v. phrase, to attend to; mange; to see to (bàn về cái gì, thỏa thuận cái gì)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Destination",
//         "mean": "n. the place to which one is going or directed (điểm đến)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Distinguish",
//         "mean": "v. to make noticeable or different (nhận ra, nhận biết)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Distinguishable",
//         "mean": "adj. có thể nhận ra",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Distinguishably",
//         "mean": "adv. nhận ra, nhận biết",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Economical",
//         "mean": "adj. intended to save money, time, or effort (tiết kiệm)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Economy",
//         "mean": "n. sự tiết kiệm",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Economize",
//         "mean": "v. tiết kiệm",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Equivalent",
//         "mean": "adj. equal (tương đương)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Excursion",
//         "mean": "n. a pleasure trip; a trip at a reduced fare (chuyến thăm quan)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Expensive",
//         "mean": "adj. marked by high prices (đắt tiền)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Expense",
//         "mean": "n. chi phí,chi tiêu",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Expensively",
//         "mean": "adv. tốn kém, đắt tiền",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Extend",
//         "mean": "v. to make longer; to offer (keó dài, dành cho)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Prospective",
//         "mean": "adj. likely to become or be (về sau, sắp tới)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Situation",
//         "mean": "n. the combination of circumstances at a given moment (vị trí, tình thế)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Substantial",
//         "mean": "adj. considerable in importance, value degree amount, or extent (đáng kể, quan trọng)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Substance",
//         "mean": "n. Chất liệu; vật chất, bản chất...",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "substantially",
//         "mean": "adv. đáng kể, có tính chất quan trọng",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "System",
//         "mean": "n. a functionally related group of elements (hệ thống)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Comprehensive",
//         "mean": "adj. covering broadly; inclusive (bao gồm, bao hàm)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Comprehensiveness",
//         "mean": "n. sự toàn diện",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Comprehensively",
//         "mean": "adv. toàn diện",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Deluxe",
//         "mean": "adj. noticeably luxurious (thuộc loại sang trọng, xa xỉ)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Directory",
//         "mean": "n. a book or collection of information or directions (danh mục, danh bạ)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Duration",
//         "mean": "n. the time during which something lasts (khoảng thời gian)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Entitle",
//         "mean": "v. to allow or qualify (cho quyền làm gì)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Fare",
//         "mean": "n. the money paid for transportation (tiền xe, tiền vé)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Offset",
//         "mean": "v. to counterbalance (đền bù, bù đắp)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Operate",
//         "mean": "v. to perform a function (hoạt động)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Operation",
//         "mean": "n. operational adj.,(sự hoạt động)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Punctual",
//         "mean": "adj. prompt (đúng giờ)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Punctuality",
//         "mean": "n. sự đúng giờ",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "punctually",
//         "mean": "adv. tính đúng giờ",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Relatively",
//         "mean": "adv. somewhat (tương đối, vừa phải)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Remainder",
//         "mean": "n. the remaining part (phần còn lại)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Remote",
//         "mean": "adj. far removed (xa xôi, tách biệt)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Remoteness",
//         "mean": "n. sự xa xôi, vùng sâu vùng xa",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Remotely",
//         "mean": "adv. Sự xa xôi, rất xa",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Advance",
//         "mean": "n. sự cải tiến; v. tiến bộ, thúc đẩy",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Chain",
//         "mean": "n, a group of enterprises under a single control ( dãy, chuỗi, loạt. Các công việc kinh doanh do 1 người làm chủ)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Check in",
//         "mean": "v. to register at a hotel; to report one’s presence (đăng ký ở khách sạn, sự đăng ký đi máy bay)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Confirm",
//         "mean": "v. to validate ( xác nhận; chứng thực)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Confirmation",
//         "mean": "n. sự xác nhận; chứng thực",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Confirmed",
//         "mean": "adj. xác nhận",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Expect",
//         "mean": "v. to consider probable or reasonable (đoán trước, liệu trước)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Expectation",
//         "mean": "n. Sự mong đợi",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Housekeeper",
//         "mean": "n. someone employed to do domestic work (quản gia)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Notify",
//         "mean": "v. to report (thông báo, cho biết)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Preclude",
//         "mean": "v. to make impossible; to rule out (ngăn cản, ngăn ngừa)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Quote",
//         "mean": "v. to give exact information on; n., a quotation ( trích dẫn)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Quotation",
//         "mean": "n. quotable adj., (lời trích dẫn)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Rate",
//         "mean": "n. the payment or price according to a standard (giá (cả))",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Reserve",
//         "mean": "v. to set aside (đặt trước, dự trữ, dự phòng, để dành)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Reservation",
//         "mean": "n. sự đặt chỗ trước",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Service",
//         "mean": "n. useful functions (dịch vụ)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Busy",
//         "mean": "adj. engaged in activity (bận)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Coincide",
//         "mean": "v. to happen at the same time (xảy ra trùng khớp, đồng thời)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Coincidence",
//         "mean": "n. sự trùng hợp, đồng thời",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Coincidentally",
//         "mean": "adv. trùng hợp ngẫu nhiên",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Confusion",
//         "mean": "n. a lack of clarity, order, or understanding (nhầm lẫn, bối rối)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Contact",
//         "mean": "v. to get in touch with (liên hệ với ai)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Disappoint",
//         "mean": "v. to fail to satisfy the hope, desire, or expectation of (làm thất vọng)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Intend",
//         "mean": "v. to have in mind (dự định)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Intention",
//         "mean": "n. sự dự tính, dự định",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Intent",
//         "mean": "adj. dự định",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "License",
//         "mean": "n. the legal permission to do or own a specified thing (cấp phép, giấy phép)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Nervous",
//         "mean": "adj. easily agitated or distressed; uneasy or apprehensive (hồi hộp, lo lắng)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Nervousness",
//         "mean": "n. sự hồi hợp, lo lắng",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Nervously",
//         "mean": "adv. hồi hợp, lo lắng",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Optional",
//         "mean": "adj. not compulsory or automatic (tùy ý, ko bắt buộc)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Tempt",
//         "mean": "v. to be inviting or attractive to (lôi kéo, xúc giục)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Temptation",
//         "mean": "n. sự lôi kéo, cám dỗ",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Tempting",
//         "mean": "adj. cám dỗ",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Thrill",
//         "mean": "n. the source or cause of excitement or emotion (rùng mình, rùng rợn li kỳ)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Tier",
//         "mean": "n. a rank or class (dãy, tầng, lớp)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Attain",
//         "mean": "v. to achieve (đạt được, giành được)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Attainment",
//         "mean": "n. sự đạt được, giành được",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Attainable",
//         "mean": "adj. có thể đạt được",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Combine",
//         "mean": "v. to come together (kết hợp, phối hợp)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Continue",
//         "mean": "v. to maintain without interruption ( tiếp tục)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Continuation",
//         "mean": "n. sự tiếp diễn, tiếp tục",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Continual",
//         "mean": "adj. tiếp tục",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Description",
//         "mean": "n. a representation in words or pictures (sự mô tả, diễn tả)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Describe",
//         "mean": "v. miêu tả",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "descriptive",
//         "mean": "adj. dùng để tả, thích miêu tả",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Disperse",
//         "mean": "v. to spread widely, to scatter (phân tán)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Entertainment",
//         "mean": "n. a diverting performance or activity (sự giải trí)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Entertain",
//         "mean": "v. giải trí",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Entertaining",
//         "mean": "adj. giải trí",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Influence",
//         "mean": "v. to alter or affect (ảnh hưởng, tác động)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Range",
//         "mean": "n. the scope (phạm vi, trình độ, lĩnh vực)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Release",
//         "mean": "v. to make available to the pubic; to give permission for performance (công bố, phát hành)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Represent",
//         "mean": "v. to typify (đóng, diễn kịch)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Separate",
//         "mean": "adj. detached; kept apart (tách bạch, tách tiêng)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Successive",
//         "mean": "adj. following in order (kế tiếp, nối tiếp, liên tục liên tiếp)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Acting",
//         "mean": "n. thủ vai, diễn xuất",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Approach",
//         "mean": "v. n. tiếp cận, lại gần;",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Approachable",
//         "mean": "adj. có thể tiếp cận, lại gần",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Audience",
//         "mean": "n. the spectators at a performance (khán giả)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Create",
//         "mean": "v. to produce through artistic or imaginative effort (sáng tạo)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Creation",
//         "mean": "n. sự sáng tạo",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Creative",
//         "mean": "adj. sáng tạo",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Dialogue",
//         "mean": "n. a conversation between two or more persons (giai thoại, hội thoại)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Element",
//         "mean": "n. fundamental or essential constituent (yếu tố, nguyên tố)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Experience",
//         "mean": "n. kinh nghiệm",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Experienced",
//         "mean": "adj. kinh nghiệm, từng trãi",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Occur",
//         "mean": "v. to take place; to come about (xuất hiện, nảy ra )",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Perform",
//         "mean": "v. to act before an audience, to give a public presentation of (diễn xuất, thực hiện)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Performance",
//         "mean": "n. biểu diên, trình diễn, hiệu năng hoạt động",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Performer",
//         "mean": "n. người biểu diễn, thực hiện",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Rehearse",
//         "mean": "v. to practice in preparation for a public performance; to direct in rehearsal (Diễn tập, kể lại, thuật lại)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Review",
//         "mean": "n. a critical estimate of a work or performance; v., writing a criticism of a performance (Sự phê bình, lời phê bình )",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Sold out",
//         "mean": "adj. having all tickets or accommodations completely sold, especially ahead of time; v., to sell all the tickets (hết vé)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Available",
//         "mean": "adj. ready for use; willing to serve (sẵn sàng để dùng)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Broad",
//         "mean": "adj. covering a wide scope (rộng rãi, rõ ràng)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Category",
//         "mean": "n. a division in a system of classification; a general class of ideas (hạng, loại)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Categorize",
//         "mean": "v. phân loại xác thực",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Disparate",
//         "mean": "adj. fundamentally distinct or different (khác loại)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Divide",
//         "mean": "v. to separate into parts (phân chia)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Favorite",
//         "mean": "adj. preferred (ưa thích)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Favorable",
//         "mean": "adj. thuận lợi, thuận tiện",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Favorably",
//         "mean": "adv. thuận lợi",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Instinct",
//         "mean": "n. an inborn pattern that is a powerful motivation (bản năng)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Preference",
//         "mean": "n. someone or something liked over another or others (sự ưa thích, thích cái gì hơn)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Prefer",
//         "mean": "v. thích hơn",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "preferential",
//         "mean": "adj. ưu đãi, ưu tiên",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Reason",
//         "mean": "n. the basis or motive for a action; an underlying fact or cause (lý do)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Relaxation",
//         "mean": "n. sự thư giãn, giải trí",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Relax",
//         "mean": "v. thư giãn",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Relaxed",
//         "mean": "adj. thư giãn",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Taste",
//         "mean": "n. the ability to discern what is excellent or appropriate (sở thích,thị hiếu)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Urge",
//         "mean": "v. to advocate earnestly; a., a natural desire (thúc giục, giục giã)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Acquire",
//         "mean": "v. to gain possession of; to get by one’s own efforts (mua được, thâu được)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Admire",
//         "mean": "v. to regard with pleasure; to have esteem or respect for (Khâm phục, hâm mộ)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Collection",
//         "mean": "n. a group of objects or works to be seen, studied, or kept together (bộ sưu tập)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Collect",
//         "mean": "v. thu thập, sưu tầm",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Collector",
//         "mean": "n. người thu thập, sưu tầm",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Criticism",
//         "mean": "n. an evaluation, especially of literary or other artistic works (sự phê bình, bình phẩm)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Criticize",
//         "mean": "v. Phê bình",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Express",
//         "mean": "v. to give an opinion or depict emotion (bày tỏ, biểu lộ tình cảm)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Fashion",
//         "mean": "n. the prevailing style or custom (thời trang)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Leisure",
//         "mean": "n. freedom from time-consuming duties; free time (thời gian rảnh rỗi)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Respond",
//         "mean": "v. to make a reply; to react (hồi âm, phúc đáp)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Response",
//         "mean": "n. sự trả lời",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Responsive",
//         "mean": "adj. đáp lại",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Schedule",
//         "mean": "n. a list of times of events; v., to enter on a schedule (lịch trình, kế hoạch làm việc)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Significant",
//         "mean": "adj. meaningful; having a major effect; important (quan trọng, trọng đại, đáng kể)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Specialize",
//         "mean": "v. to concentrate on a particular activity (chuyên môn hóa)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Specialist",
//         "mean": "n. chuyên gia",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Specialized",
//         "mean": "adj. chuyên môn",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Spectrum",
//         "mean": "n. a range of related qualities, ideas, or activities ( sự phân bổ theo tính chất, số lượng, hành vi)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "assignment",
//         "mean": "(n) something, such as a task (sự giao việc, phân công)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "choose",
//         "mean": "(v) chọn, lựa chọn",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Constantly",
//         "mean": "on a continual basis, happening all the time (liên tục, luôn luôn, không đổi)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "constitute",
//         "mean": "(v) to be the elements or parts of (cấu tạo)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "decision",
//         "mean": "(n) sự quyết định, sự lựa chọn",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "disseminate",
//         "mean": "(v) truyền bá, phổ biến, phân tán",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "impact",
//         "mean": "(n,v) tác động, ảnh hưởng",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "in-depth",
//         "mean": "(adj) in complete detail; thorough (chuyên sâu)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "investigate",
//         "mean": "(v) to uncover and report hidden information (khảo sát, điều tra)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "link",
//         "mean": "liên kết",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "subscribe",
//         "mean": "(v) to receive a periodical regularly on order (đăng ký, đặt mua)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "thorough",
//         "mean": "(adj) exhaustively complete (kỹ lưỡng, chuyên sâu, tỉ mỉ)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "thoroughness",
//         "mean": "(n) sự kỹ lưỡng, tỉ mỉ",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "thoroughly",
//         "mean": "(adv) kỹ lưỡng",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "annually",
//         "mean": "(adv) once a year (hàng năm)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "appointment",
//         "mean": "cuộc hẹn",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "assess",
//         "mean": "(v) to determine the value or rate of something (tính giá, định giá)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "diagnose",
//         "mean": "(v) to recognize a disease; to analyze the nature of something (chuẩn đoán)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "effective",
//         "mean": "(adj) producing the desired effect; being in effect (có hiệu lực, có kết quả)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "instrument",
//         "mean": "(n) a tool for precise work; the mean whereby something is achieved (dụng cụ đo lường, dụng cụ kiểm tra)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "manage",
//         "mean": "(v) quản lý",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "prevent",
//         "mean": "(v) to keep from happening (ngăn ngừa, ngăn cản)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "recommendation",
//         "mean": "(n) advice; endorsement",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "record",
//         "mean": "(n) kỷ lục, hồ sơ lý lịch",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "refer",
//         "mean": "(v) tham khảo",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "serious",
//         "mean": "(adj) Nghiêm trọng",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "aware",
//         "mean": "nhận thức",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "catch up",
//         "mean": "(v) to bring up to date (bắt kịp)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "distraction",
//         "mean": "(n) the act of being turned away from the focus (sự không tập trung, sự phân tâm)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "encouragement",
//         "mean": "(n) inspiration or support (sự động viên, sự giúp đỡ)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "evident",
//         "mean": "(adj) easily seen or understood; obvious (hiển nhiên, rõ ràng)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "habit",
//         "mean": "(n) thói quen",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "illuminate",
//         "mean": "(v) to provider or brighten with light (chiếu sáng, rọi sáng)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "irritate",
//         "mean": "(v) to chafer or inflame, to bother (làm viêm, sưng tấy)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "overview",
//         "mean": "(n) an summary; a survey; a quick look (tổng quan, nhìn lướt qua)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "position",
//         "mean": "(n) the right or appropriate place (đúng chỗ, vị trí thích hợp)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "regularly",
//         "mean": "(adv) đều đặn, thường xuyên",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "restore",
//         "mean": "(v) to bring back to an original condition (phục hồi lại)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "allow",
//         "mean": "(v) to let do or happen; to permit",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "alternative",
//         "mean": "(adj) allowing a choice; other (lựa chọn, phương pháp thay thế)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "aspect",
//         "mean": "(n) khía cạnh, (adj) tình trạng",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "concern",
//         "mean": "(n) anxiety; worry",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "emphasize",
//         "mean": "(v) chú trọng, nhấn mạnh",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "incur",
//         "mean": "(v) to become subject to (gánh chịu)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "personnel",
//         "mean": "(n) a group of employees or workers",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "policy",
//         "mean": "chính sách",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "portion",
//         "mean": "(n) a section or quantity within a larger thing; a part of a whole (một phần, một đoạn)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "regardless",
//         "mean": "(adv) in spite of (bất chấp, bất kể)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "salary",
//         "mean": "(n) money that employees receive for doing their job, usually paid every month",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "suit",
//         "mean": "(v) to be appropriate; to satisfy (thích hợp)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "admit",
//         "mean": "(v) to permit to enter (chấp nhận, cho vào)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "authorize",
//         "mean": "(v) to approve (cho phép, ủy quyền)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "designate",
//         "mean": "(v) to indicate or specify (đặt tên, chỉ rõ)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "escort",
//         "mean": "(n) a person accompanying another to guide or protect (người dẫn đường, người bảo vệ)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "identify",
//         "mean": "(v) to ascertain the name or belongings of (nhận ra)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "mission",
//         "mean": "(n) an inner calling to pursue an activity or perform a service (sứ mệnh, nhiệm vụ)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "permit",
//         "mean": "(v) to allow (cho phép)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "pertinent",
//         "mean": "(adj) having relevance to the matter at hand (thích hợp, đúng chỗ)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "procedure",
//         "mean": "(n) a series of steps taken to accomplish an end (phương thức, thủ tục)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "result",
//         "mean": "(n) an outcome",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "statement",
//         "mean": "(n) an accounting showing an amount due; a bill (báo cáo, bản kê)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "usually",
//         "mean": "(adv) customarily (thông thường, theo lẽ thường)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Consult",
//         "mean": "to seek advice or information of (hỏi ý kiến, tham khảo)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Control",
//         "mean": "to exercise authoritative or dominating influence (kiểm tra, kiểm soát, thử lại)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Convenient",
//         "mean": "suited or favorable to one’s purpose; easy to reach (tiện lợi, thuận lợi; thích hợp)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Detect",
//         "mean": "to discover or ascertain (dò ra, tìm ra, khám phá ra, phát hiện ra)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Detection",
//         "mean": "(n) sự dò ra, sự phát hiện ra",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Detectable",
//         "mean": "(adj) dò ra, phát hiện",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Factor",
//         "mean": "a contribution to an accomplishment, a result, or a process (nhân tố)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Interaction",
//         "mean": "an influence; a mutual activity (tác động qua lại)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Limit",
//         "mean": "the point beyond which something cannot proceed (giới hạn, hạn độ)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Monitor",
//         "mean": "to keep track of (giám sát)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Potential",
//         "mean": "capable of being but not ye in existence; possible (tiềm năng)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Sample",
//         "mean": "a portion, piece, or segment that is representative of a whole (mẫu, mẫu hàng)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Sense",
//         "mean": "a judgment; an intellectual interpretation (khả năng phán đoán)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Volunteer",
//         "mean": "one who performs a service without pay; v., to perform as a volunteer (người tình nguyện, người xung phong)",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "Volunteerism",
//         "mean": "hoạt động tình nguyện",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "voluntary",
//         "mean": "adj, tự nguyện",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "admit V-ing",
//         "mean": "(V + V-ing) cho phép",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "deny V-ing",
//         "mean": "(V + V-ing) từ chối",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "consider V-ing",
//         "mean": "(V + V-ing) cân nhắc",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "stop V-ing",
//         "mean": "(V + V-ing) ngừng",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "contemplate V-ing",
//         "mean": "(V + V-ing) chiêm ngưỡng",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "imagine V-ing",
//         "mean": "(V + V-ing) tưởng tượng",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "finish V-ing",
//         "mean": "(V + V-ing) hoàn tất",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "mind V-ing",
//         "mean": "(V + V-ing) nhớ, lưu ý, để ý",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "resent V-ing",
//         "mean": "(V + V-ing) tức giận",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "dislike V-ing",
//         "mean": "(V + V-ing) không thích",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "appreciate V-ing",
//         "mean": "(V + V-ing) đánh giá cao",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "enjoy V-ing",
//         "mean": "(V + V-ing) thưởng thức, tận hưởng",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "mention V-ing",
//         "mean": "(V + V-ing) đề cập đến, nhắc đến",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "postpone V-ing",
//         "mean": "(V + V-ing) hoãn",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "discuss V-ing",
//         "mean": "(V + V-ing) thảo luận",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "suggest V-ing",
//         "mean": "(V + V-ing) gợi ý",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "avoid V-ing",
//         "mean": "(V + V-ing) tránh né",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "risk V-ing",
//         "mean": "(V + V-ing) rủi ro, nguy cơ",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "involve V-ing",
//         "mean": "(V + V-ing) liên quan đến",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "keep V-ing",
//         "mean": "(V + V-ing) giữ",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "miss V-ing",
//         "mean": "(V + V-ing) nhớ, bỏ lỡ",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "practice V-ing",
//         "mean": "(V + V-ing) thực hành, luyện tập",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "can't V-ing",
//         "mean": "(V + V-ing) không thể",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "stand V-ing",
//         "mean": "(V + V-ing) đứng",
//         "type": "none",
//         "learnNum": 0
//     },
//     {
//         "vocabulary": "can't help V-ing",
//         "mean": "(V + V-ing) không thể nhịn, không thể control something",
//         "type": "none",
//         "learnNum": 0
//     }
// ]

// const b = {
//     data: a
// }

// const res = await fetch('https://61d58e1a2b4f730017a82900.mockapi.io/demo', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(b),
// })