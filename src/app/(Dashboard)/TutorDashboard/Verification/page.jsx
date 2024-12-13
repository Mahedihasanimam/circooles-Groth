import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";

const page = () => {
    return (
        <div className="h-fit pt-8 bg-white p-6 flex items-center justify-center">

            <div className="text-center max-w-2xl mx-auto space-y-6">
                <h1 className="text-[#000000] font-semibold text-2xl py-8">Verify Your Account to Tutoring</h1>

                <div className="w-fit mx-auto">
                <svg width="154" height="154" viewBox="0 0 154 154" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.2697 73.2466C16.755 60.5894 17.4364 47.8792 20.206 35.366C20.6084 33.5485 22.2741 35.202 34.0169 32.572C34.9153 32.3711 35.806 32.1611 36.6883 31.9442C37.0839 31.2121 37.5223 30.4831 38.0099 29.7656C27.7849 32.1933 19.7606 33.0181 19.4747 33.2672C18.9672 33.7088 18.8093 33.8958 18.4544 35.4166C15.0371 50.0654 14.9482 65.5857 17.6932 80.4622C17.8289 78.0958 18.0213 75.6651 18.2689 73.2459L18.2697 73.2466Z" fill="black" />
                    <path d="M132.836 42.9628C130.827 41.0403 127.441 38.9791 126.003 38.4678C124.001 37.7549 106.219 36.0501 81.0438 21.0525C71.6367 15.4491 72.8087 14.4587 69.3102 16.9615C68.0852 17.8376 66.8028 18.6678 65.4759 19.4535C66.0539 19.5417 66.6273 19.6444 67.1968 19.7624C71.8007 16.9109 71.0978 16.3206 72.1817 17.1332C83.1495 25.3582 102.747 35.0934 121.747 38.9607C123.797 39.3777 124.948 38.7943 124.625 40.7153C124.147 43.5615 123.022 60.7828 114.771 80.825C103.98 107.039 81.7061 131.131 60.6259 142.303C59.0261 143.151 57.4133 144.315 55.2294 142.609C50.2438 138.715 46.72 135.654 42.1153 130.166C34.1117 120.626 31.4687 115.985 27.951 107.68C27.3922 107.466 26.7989 107.238 26.1258 106.986C26.0476 106.957 25.9702 106.928 25.8936 106.898C31.3054 118.969 38.7394 129.775 47.8437 138.235C49.5455 139.816 61.4339 150.133 63.8041 149.444C70.9215 147.372 90.9407 134.021 104.852 116.812C129.981 85.7256 134.25 44.3189 132.835 42.9644L132.836 42.9628ZM131.827 44.0053C128.501 84.1848 106.91 123.017 70.5926 144.684C62.6995 149.393 63.2268 148.68 61.6133 147.481C61.2039 147.177 58.9388 145.468 58.882 145.411C58.1937 144.718 57.9583 145.594 63.4453 142.549C82.084 132.208 97.9883 114.475 108.36 97.3457C117.022 83.0396 120.911 71.0554 123.718 57.1271C127.544 38.1389 124.925 39.2711 127.629 40.7736C128.982 41.5248 130.209 42.4684 131.494 43.3216C131.838 43.55 131.836 43.5577 131.827 44.0053Z" fill="black" />
                    <path d="M48.7898 45.876C74.529 46.536 74.2092 49.7333 74.5235 46.713C75.5484 36.856 70.132 31.3184 61.3811 30.8125C56.9704 32.988 52.4883 34.6337 48.2884 35.8886C47.1761 37.414 46.3399 39.2606 45.7266 41.4032C45.2797 42.9654 45.1493 44.106 45.1524 45.5019C45.1532 46.004 45.1195 45.7817 48.7898 45.876Z" fill="black" />
                    <path d="M31.9345 46.4263C33.0905 46.4049 32.718 45.833 32.7716 45.557C32.9801 44.4846 33.2109 42.0723 33.9552 39.1211C30.1217 39.7435 27.6403 39.985 27.3713 40.1858C27.0723 40.4081 26.8117 40.6826 26.7312 41.0812C26.2253 43.5709 25.8129 46.0147 25.4863 48.4109C27.3828 47.2373 30.0166 46.4623 31.9345 46.4263Z" fill="black" />
                    <path d="M114.023 44.8317C113.048 44.4936 101.532 42.9866 86.5402 35.5334C86.3402 35.4345 86.1439 35.3356 85.9492 35.2383C86.2175 36.0899 86.436 36.9738 86.6008 37.889C88.1983 46.7572 85.4088 49.6877 86.7234 50.0473C93.2314 51.8295 96.3858 53.0031 97.577 60.3336C98.9775 68.9534 95.6691 91.1198 92.6243 103.31C102.495 89.3414 112.245 65.8167 114.84 46.2068C114.853 45.2249 114.753 45.0846 114.023 44.8317H114.023Z" fill="black" />
                    <path d="M74.3441 114.453C65.2758 114.453 58.2074 115.202 37.6953 110.543C46.8694 125.693 57.7345 133.471 59.3427 132.981C63.3088 131.771 68.8234 127.37 71.1008 125.639C77.0646 121.107 80.8574 117.568 84.4158 113.565C81.1878 114.252 77.3819 114.284 74.3441 114.453Z" fill="black" />
                    <path d="M97.5769 60.336C96.3857 53.0055 93.2313 51.8319 86.7233 50.0497C85.4087 49.6894 88.1982 46.7596 86.6007 37.8914C83.572 21.0771 62.5035 15.0245 47.4791 21.8138C34.1802 27.8235 33.3792 42.4233 32.7705 45.56C32.7169 45.8359 33.0894 46.407 31.9335 46.4285C29.049 46.4829 24.5439 48.2076 23.3673 50.446C18.0175 60.6242 16.0222 92.2352 18.5265 99.8601C19.2325 102.009 18.8929 104.281 26.1253 106.987C29.8178 108.368 31.1194 109.044 37.3714 110.471C58.1334 115.212 65.2278 114.455 74.3436 114.455C80.2061 114.13 88.9318 114.312 90.8389 109.318C94.1274 100.706 99.2618 70.7097 97.5761 60.3368L97.5769 60.336ZM34.4593 45.9961C34.5053 43.8866 36.1802 36.4534 38.581 32.2948C41.0646 27.9922 43.5482 25.8934 46.9165 23.9893C51.121 21.613 58.9275 20.687 59.8589 20.6686C65.2324 20.562 70.4894 22.1702 74.6426 24.3725C80.6354 27.5499 83.1136 31.3121 84.3286 36.123C85.4256 40.467 85.3911 45.6543 84.7993 48.8914C84.5755 50.1141 84.7556 49.5207 76.4409 48.3249C76.1466 48.2828 76.0753 48.2076 76.1197 47.8757C79.1368 25.3637 51.6951 24.5327 45.3351 37.6438C43.5352 41.3539 43.6234 45.7279 43.6203 45.7486C43.5444 46.1771 40.0827 45.8658 40.0827 45.9831C34.2216 45.9831 34.4524 46.3342 34.4593 45.9961ZM74.5238 46.7136C74.2095 49.7338 74.5291 46.5366 48.7899 45.8766C45.1197 45.7823 45.1526 46.0053 45.1519 45.5025C45.1496 44.1066 45.2791 42.9652 45.726 41.4037C47.7198 34.4343 52.0799 30.5877 60.5833 30.7809C69.801 30.9902 75.5785 36.5607 74.523 46.7129L74.5238 46.7136ZM90.7508 103.296C89.2614 109.816 89.3434 110.422 83.3298 111.795C80.0467 112.545 65.1389 112.905 61.799 112.481C59.3583 112.17 59.2342 113.412 42.0006 109.828C16.4783 104.522 21.0738 102.426 19.2724 93.8902C18.2337 70.8239 23.0346 53.6195 24.4665 51.6518C25.6317 50.0512 26.6106 49.8419 27.5718 49.1528C27.8738 48.9366 27.7497 49.0754 29.2851 48.5656C30.3935 48.1977 32.1205 48.141 32.1389 48.141C47.9544 46.8417 61.267 48.1732 76.9898 50.3134C84.7625 51.3712 93.9511 52.1209 95.3754 58.0969C97.7364 68.0038 92.9002 93.891 90.7515 103.295L90.7508 103.296Z" fill="black" />
                    <path d="M46.3718 65.512C43.9663 69.9458 44.7628 75.849 49.1651 79.6917C49.3513 79.8542 49.4241 80.0359 49.3897 80.2712C49.0478 82.6268 48.5097 88.1743 48.5227 91.1071C48.5449 96.0069 48.7511 98.7159 52.8951 100.466C55.8287 101.705 58.8887 100.557 60.1183 96.7451C60.6326 95.1492 60.6656 93.974 61.2758 88.4418C62.04 81.5176 61.4421 81.733 62.1351 81.4325C65.4443 79.9975 68.6515 75.8796 68.5703 71.0097C69.0409 60.032 52.1768 54.8118 46.371 65.5113L46.3718 65.512ZM53.0844 84.846C51.6027 98.8363 53.6992 100.287 51.3298 98.3924C49.72 97.1054 49.6503 94.0369 49.6748 91.7947C49.7745 82.7096 51.4463 80.065 50.4398 79.1827C46.7512 75.9524 44.8724 70.6671 48.1088 65.4338C48.8623 64.2158 50.5947 62.9165 50.7112 62.8061C52.0113 61.5773 53.9851 61.4447 53.227 62.2826C48.249 67.7895 50.1623 73.8759 53.7406 76.6454C54.432 77.1805 53.9138 77.0042 53.0829 84.8452L53.0844 84.846Z" fill="black" />
                    <path d="M86.9686 61.0712C86.7248 70.9766 83.1473 110.389 81.5138 105.788C81.0999 104.623 85.8548 62.1107 85.8241 60.3859C85.759 56.731 84.859 56.3056 85.3995 56.0112C85.7919 55.7973 86.2457 56.442 86.3875 56.8161C86.9027 58.176 87.0054 59.6171 86.9694 61.072L86.9686 61.0712Z" fill="black" />
                    <path d="M14.8297 131.387C14.3897 131.238 18.4624 127.043 18.388 126.264C18.3259 125.613 17.551 125.236 17.0259 125.703C16.3114 126.339 14.9753 127.746 13.9359 128.806C13.4974 129.254 13.7274 125.567 12.2112 122.733C11.8501 122.059 10.9655 122.22 10.9402 123.039C10.8889 124.709 11.7298 129.136 12.0149 130.472C10.5738 130.107 6.43218 128.966 6.39768 130.472C6.39002 130.808 6.58242 131.007 6.84152 131.135C9.94601 132.664 10.78 132.315 10.455 132.748C8.72413 135.051 8.17451 135.656 7.87712 136.542C7.66479 137.173 7.8319 137.876 8.52866 137.881C9.29138 137.887 9.54434 137.256 11.2392 135.208C13.4829 132.498 12.2963 133.21 13.7834 137.324C14.1536 138.348 14.2464 138.605 14.7278 138.533C15.5587 138.409 15.0068 135.664 14.8335 134.166C14.75 133.444 18.933 135.828 19.5294 134.304C20.0269 133.033 17.7978 132.394 14.8297 131.385V131.387Z" fill="black" />
                    <path d="M118.127 12.5463C117.531 12.3646 119.591 11.4509 121.085 9.3751C121.516 8.77643 120.976 8.14172 119.506 9.05622C116.478 10.9404 116.441 11.6403 116.35 11.1757C116.021 9.49085 115.843 8.20075 115.313 7.25251C114.754 6.2514 113.283 5.95474 113.73 9.12981C114.284 13.0507 114.93 11.5306 111.67 11.697C110.183 11.7729 109.651 12.6682 110.102 13.2569C110.368 13.6042 110.813 13.6724 111.727 13.8671C113.508 14.2465 113.163 13.5796 110.308 16.3829C110.007 16.678 109.625 17.3365 110.028 17.788C110.732 18.5752 111.94 17.3695 114.573 15.2967C114.928 15.0169 114.633 15.289 115.502 17.7543C115.793 18.5798 115.974 19.1386 116.575 19.1425C117.081 19.1463 117.604 18.6021 117.47 17.6009C116.751 12.2474 116.322 15.8724 121.04 14.3316C122.666 13.8004 119.656 13.0124 118.127 12.5463Z" fill="black" />
                    <path d="M116.701 141.028C116.078 143.391 119.774 143.485 119.566 141.428C119.706 139.968 117.226 139.035 116.701 141.028Z" fill="black" />
                    <path d="M32.8397 3.83669C31.7857 3.7723 28.6505 4.95816 29.7704 7.2992C30.6358 9.10827 33.1501 9.56973 34.6135 7.93391C36.2593 6.09418 34.5836 3.71251 32.8397 3.83669ZM32.4664 7.45558C30.8397 7.57056 30.5714 5.68485 31.1402 5.49091C31.6691 5.31077 32.1774 5.03711 32.763 5.07544C34.4326 5.18506 33.9435 7.58359 32.4664 7.45558Z" fill="black" />
                    <path d="M147.389 90.5815C146.141 87.779 141.961 88.8698 140.717 90.2641C138.225 93.0551 141.99 98.4854 145.842 95.1961C147.145 94.0831 148.028 92.0172 147.389 90.5815ZM143.241 94.6388C142.704 94.7124 141.399 93.453 141.73 91.972C141.947 90.9992 142.899 90.2434 143.35 90.3247C143.642 90.3776 143.947 90.3339 144.246 90.3546C147.088 90.5516 145.579 94.5307 143.241 94.6388Z" fill="black" />
                </svg>
                </div>

                <p className="text-[#667085] text-[14px] pb-4">Verification boosts your credibility, improves your visibility on the platform, and helps students trust your profile, increasing your chances of bookings</p>

                <Link  href={'/TutorDashboard/Verification/verificationStep1'}>
                <Button
             
              style={{
                height: "44px",
                fontSize: "16px",
                fontWeight: 400,
                backgroundColor: "#14698A",
                color: "#FFFFFF",
              }}
              type="primary"
            >
              Get verified
            </Button>
                </Link>
            </div>
        </div>
    );
};

export default page