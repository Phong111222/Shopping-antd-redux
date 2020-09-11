import React from 'react';

function Footer() {
  return (
    <div style={{ padding: '15px 0', background: '#c4c4c4' }}>
      <div
        style={{
          color: '#777676',
          fontWeight: 'bold',
          maxWidth: 1000,
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <p>Nguyễn Tiên Phong</p>
          <p>EMAIL: tienphong111222@gmail.com</p>
          <p>Contact:0365xxxxxx</p>
        </div>

        <div>
          <p>HỌC VIỆN CÔNG NGHỆ BƯU CHÍNH VIỄN THÔNG</p>
          <p>
            97 Đường Man Thiện, Hiệp Phú, Quận 9, Thành phố Hồ Chí Minh 70000
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
