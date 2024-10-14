# Wedding Invitation React.js Template

Mẫu thiệp cưới cho thiệp mời đám cưới.  

Nếu bạn thích hoặc sử dụng kho lưu trữ này, vui lòng Star and Fork

## Template Preview

### Wedding Invitation
## Nội dung và chức năng có trong mẫu
- In ngày cưới, địa điểm và lời chúc
- Album ảnh
- Nơi gửi tiền chúc mừng (hỗ trợ chức năng sao chép clipboard số tài khoản)
- Chức năng chia sẻ liên kết

## Wedding Invitation v1 How to use

`./src/pages/index.tsx` `<Head>` Chỉnh sửa phần này cho phù hợp 
```html
<meta content="○○○❤○○○ mời bạn đến dự đám cưới" name="Title" />
<meta content="○○○○ Năm ○○ Tháng ○○ Ngày ○ Ngày ○○ Sáng ○○ ○○ ○○ Phút" name="Description" />
<meta content="○○○○ Năm ○○ Tháng ○○ Ngày ○ Ngày ○○ Sáng ○○ ○○ ○○ Phút" name="Keyword" />
<meta property="og:title" content="○○○❤○○○ Mời bạn đến dự đám cưới" />
<meta property="og:description" content="○○○○ Năm ○○ Tháng ○○ Ngày ○ Ngày ○○ Sáng ○○ ○○ ○○ Phút" />
<meta property="og:url" content="https://" />
<meta name="theme-color" content="#BCAAA4" />
```

`./src/data.json`Chỉnh sửa và sử dụng.  
```json
{
  "date": "Ngày 1 tháng 1 năm 1970, Thứ năm, 12 giờ trưa",
  "location": "○○○ Đám cưới, ○o tầng ○○ Hội trường",
  "gretting": "Phát triển tình yêu",
  "groom": {
    "name": "○○○",
    "account_number": "○○ Bank ***-***-******",
    "parents": {
      "mother": {
        "name": "○○○",
        "account_number": "○○ Bank ***-***-******"
      },
      "father": {
        "name": "○○○",
        "account_number": "○○ Bank ***-***-******"
      }
    }
  },
  "bride": {
    "name": "○○○",
    "account_number": "○○ Bank ***-***-******",
    "parents": {
      "mother": {
        "name": "○○○",
        "account_number": "○○ Bank ***-***-******"
      },
      "father": {
        "name": "○○○",
        "account_number": "○○ Bank ***-***-******"
      }
    }
  },
  "kakaotalk": {
    "api_token": "",
    "wedding_invitation_url": "",
    "share_image": ""
  }
}
```
