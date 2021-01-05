import React from "react";
import Footer from '../components/footer';

export function FooterContainer() {
    return (
        <Footer>
            <Footer.Wrapper>
                <Footer.Row>
                    <Footer.Column>
                        <Footer.Logo>                            
                            <svg width="286" height="159" viewBox="0 0 286 159" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M137.371 15.4062H158.5V19.625H150.467V41H145.756V19.625H137.371V15.4062ZM166.428 41H161.893V15.4414H166.428V24.9688C166.955 24.0078 167.729 23.2109 168.748 22.5781C169.779 21.9453 170.898 21.6289 172.105 21.6289C172.75 21.6289 173.389 21.7988 174.021 22.1387C174.666 22.4668 175.258 22.9414 175.797 23.5625C176.348 24.1719 176.787 24.9746 177.115 25.9707C177.455 26.9668 177.625 28.0625 177.625 29.2578V41H173.09V31.5605C173.09 30.3887 173.014 29.4102 172.861 28.625C172.721 27.8398 172.504 27.248 172.211 26.8496C171.918 26.4395 171.59 26.1582 171.227 26.0059C170.875 25.8418 170.441 25.7598 169.926 25.7598C169.516 25.7598 169.146 25.8066 168.818 25.9004C168.502 25.9941 168.186 26.1699 167.869 26.4277C167.564 26.6855 167.307 27.0254 167.096 27.4473C166.896 27.8691 166.732 28.4316 166.604 29.1348C166.486 29.8262 166.428 30.6406 166.428 31.5781V41ZM185.904 29.5566H193.164C193.082 28.502 192.719 27.6055 192.074 26.8672C191.43 26.1172 190.58 25.7422 189.525 25.7422C188.482 25.7422 187.633 26.123 186.977 26.8848C186.332 27.6348 185.975 28.5254 185.904 29.5566ZM189.684 37.4668C190.844 37.4668 191.746 37.0801 192.391 36.3066L196.398 38.0293C195.672 39.1309 194.682 39.9863 193.428 40.5957C192.174 41.2051 190.926 41.5098 189.684 41.5098C188.523 41.5098 187.416 41.2578 186.361 40.7539C185.307 40.25 184.387 39.5645 183.602 38.6973C182.828 37.8301 182.213 36.7754 181.756 35.5332C181.299 34.291 181.07 32.9668 181.07 31.5605C181.07 28.748 181.891 26.4043 183.531 24.5293C185.172 22.6426 187.17 21.6992 189.525 21.6992C191.072 21.6992 192.455 22.127 193.674 22.9824C194.904 23.8262 195.859 24.998 196.539 26.498C197.219 27.998 197.559 29.6855 197.559 31.5605V32.7559H185.887C185.898 33.5176 185.998 34.1973 186.186 34.7949C186.373 35.3809 186.602 35.8379 186.871 36.166C187.141 36.4941 187.451 36.7637 187.803 36.9746C188.154 37.1738 188.477 37.3086 188.77 37.3789C189.074 37.4375 189.379 37.4668 189.684 37.4668ZM137.371 68.4062H158.5V72.625H150.467V94H145.756V72.625H137.371V68.4062ZM165.848 84.5605C165.848 88.4395 167.148 90.3789 169.75 90.3789C172.352 90.3789 173.652 88.4395 173.652 84.5605C173.652 80.7051 172.352 78.7773 169.75 78.7773C167.148 78.7773 165.848 80.7051 165.848 84.5605ZM161.418 84.5605C161.418 81.5137 162.145 79.1055 163.598 77.3359C165.051 75.5547 167.096 74.6641 169.732 74.6641C172.369 74.6641 174.408 75.5488 175.85 77.3184C177.291 79.0879 178.012 81.502 178.012 84.5605C178.012 87.6191 177.291 90.0449 175.85 91.8379C174.408 93.6191 172.369 94.5098 169.732 94.5098C167.084 94.5098 165.033 93.625 163.58 91.8555C162.139 90.0859 161.418 87.6543 161.418 84.5605ZM192.18 79.8145C190.914 79.0996 190 78.7422 189.438 78.7422C188.793 78.7422 188.23 78.9121 187.75 79.252C187.27 79.5918 186.9 80.0488 186.643 80.623C186.396 81.1855 186.215 81.7715 186.098 82.3809C185.98 82.9902 185.922 83.623 185.922 84.2793V94H181.387V75.1387H185.922V77.9688C186.414 77.0312 187.088 76.2402 187.943 75.5957C188.799 74.9512 189.584 74.6289 190.299 74.6289C190.885 74.6289 191.5 74.7871 192.145 75.1035C192.801 75.4082 193.381 75.8008 193.885 76.2812L192.18 79.8145ZM207.262 79.8145C205.996 79.0996 205.082 78.7422 204.52 78.7422C203.875 78.7422 203.312 78.9121 202.832 79.252C202.352 79.5918 201.982 80.0488 201.725 80.623C201.479 81.1855 201.297 81.7715 201.18 82.3809C201.062 82.9902 201.004 83.623 201.004 84.2793V94H196.469V75.1387H201.004V77.9688C201.496 77.0312 202.17 76.2402 203.025 75.5957C203.881 74.9512 204.666 74.6289 205.381 74.6289C205.967 74.6289 206.582 74.7871 207.227 75.1035C207.883 75.4082 208.463 75.8008 208.967 76.2812L207.262 79.8145ZM215.189 82.5566H222.449C222.367 81.502 222.004 80.6055 221.359 79.8672C220.715 79.1172 219.865 78.7422 218.811 78.7422C217.768 78.7422 216.918 79.123 216.262 79.8848C215.617 80.6348 215.26 81.5254 215.189 82.5566ZM218.969 90.4668C220.129 90.4668 221.031 90.0801 221.676 89.3066L225.684 91.0293C224.957 92.1309 223.967 92.9863 222.713 93.5957C221.459 94.2051 220.211 94.5098 218.969 94.5098C217.809 94.5098 216.701 94.2578 215.646 93.7539C214.592 93.25 213.672 92.5645 212.887 91.6973C212.113 90.8301 211.498 89.7754 211.041 88.5332C210.584 87.291 210.355 85.9668 210.355 84.5605C210.355 81.748 211.176 79.4043 212.816 77.5293C214.457 75.6426 216.455 74.6992 218.811 74.6992C220.357 74.6992 221.74 75.127 222.959 75.9824C224.189 76.8262 225.145 77.998 225.824 79.498C226.504 80.998 226.844 82.6855 226.844 84.5605V85.7559H215.172C215.184 86.5176 215.283 87.1973 215.471 87.7949C215.658 88.3809 215.887 88.8379 216.156 89.166C216.426 89.4941 216.736 89.7637 217.088 89.9746C217.439 90.1738 217.762 90.3086 218.055 90.3789C218.359 90.4375 218.664 90.4668 218.969 90.4668ZM234.666 94H230.131V75.1211H234.666V77.9688C235.193 77.0078 235.967 76.2109 236.986 75.5781C238.018 74.9453 239.137 74.6289 240.344 74.6289C240.988 74.6289 241.627 74.7988 242.26 75.1387C242.904 75.4668 243.496 75.9414 244.035 76.5625C244.586 77.1719 245.025 77.9746 245.354 78.9707C245.693 79.9668 245.863 81.0625 245.863 82.2578V94H241.328V84.5605C241.328 83.3887 241.252 82.4102 241.1 81.625C240.959 80.8398 240.742 80.248 240.449 79.8496C240.156 79.4395 239.828 79.1582 239.465 79.0059C239.113 78.8418 238.68 78.7598 238.164 78.7598C237.754 78.7598 237.385 78.8066 237.057 78.9004C236.74 78.9941 236.424 79.1699 236.107 79.4277C235.803 79.6855 235.545 80.0254 235.334 80.4473C235.135 80.8691 234.971 81.4316 234.842 82.1348C234.725 82.8262 234.666 83.6406 234.666 84.5781V94ZM251.506 79.1641H249.027V75.1387H251.506V70.7441H256.041V75.1387H258.748V79.1641H256.041V88.7793C256.041 89.8926 256.691 90.4492 257.992 90.4492H258.678V94.2637H257.992C256.738 94.2637 255.689 94.1582 254.846 93.9473C254.014 93.7246 253.352 93.3848 252.859 92.9277C252.367 92.459 252.016 91.9023 251.805 91.2578C251.605 90.6016 251.506 89.7988 251.506 88.8496V79.1641ZM153.613 129.967C153.449 129.182 153.156 128.438 152.734 127.734C152.312 127.02 151.732 126.404 150.994 125.889C150.256 125.373 149.447 125.115 148.568 125.115C147.701 125.115 146.928 125.297 146.248 125.66C145.568 126.012 145.012 126.48 144.578 127.066C144.145 127.652 143.787 128.35 143.506 129.158C143.225 129.967 143.025 130.787 142.908 131.619C142.791 132.451 142.732 133.324 142.732 134.238C142.732 135.141 142.791 136.008 142.908 136.84C143.025 137.66 143.225 138.469 143.506 139.266C143.787 140.062 144.145 140.754 144.578 141.34C145.012 141.926 145.568 142.4 146.248 142.764C146.939 143.115 147.713 143.291 148.568 143.291C149.857 143.291 150.953 142.805 151.855 141.832C152.758 140.859 153.344 139.752 153.613 138.51H158.781C158.676 139.342 158.453 140.18 158.113 141.023C157.773 141.855 157.305 142.664 156.707 143.449C156.121 144.223 155.436 144.914 154.65 145.523C153.877 146.121 152.963 146.602 151.908 146.965C150.854 147.328 149.74 147.51 148.568 147.51C147.045 147.51 145.662 147.24 144.42 146.701C143.178 146.15 142.152 145.436 141.344 144.557C140.535 143.666 139.855 142.635 139.305 141.463C138.754 140.291 138.355 139.102 138.109 137.895C137.875 136.688 137.758 135.469 137.758 134.238C137.758 132.984 137.875 131.754 138.109 130.547C138.355 129.328 138.754 128.133 139.305 126.961C139.855 125.777 140.535 124.746 141.344 123.867C142.152 122.977 143.178 122.262 144.42 121.723C145.662 121.172 147.045 120.896 148.568 120.896C149.752 120.896 150.871 121.084 151.926 121.459C152.98 121.822 153.895 122.309 154.668 122.918C155.441 123.527 156.127 124.23 156.725 125.027C157.322 125.812 157.791 126.627 158.131 127.471C158.471 128.303 158.693 129.135 158.799 129.967H153.613ZM166.832 137.561C166.832 141.439 168.133 143.379 170.734 143.379C173.336 143.379 174.637 141.439 174.637 137.561C174.637 133.705 173.336 131.777 170.734 131.777C168.133 131.777 166.832 133.705 166.832 137.561ZM162.402 137.561C162.402 134.514 163.129 132.105 164.582 130.336C166.035 128.555 168.08 127.664 170.717 127.664C173.354 127.664 175.393 128.549 176.834 130.318C178.275 132.088 178.996 134.502 178.996 137.561C178.996 140.619 178.275 143.045 176.834 144.838C175.393 146.619 173.354 147.51 170.717 147.51C168.068 147.51 166.018 146.625 164.564 144.855C163.123 143.086 162.402 140.654 162.402 137.561ZM196.469 147H191.934V137.525C191.934 135.615 191.746 134.174 191.371 133.201C190.996 132.229 190.334 131.742 189.385 131.742C188.424 131.742 187.762 132.229 187.398 133.201C187.035 134.162 186.854 135.604 186.854 137.525V147H182.318V128.139H186.854V130.916C187.053 130.564 187.293 130.219 187.574 129.879C187.867 129.527 188.213 129.176 188.611 128.824C189.01 128.461 189.467 128.174 189.982 127.963C190.51 127.74 191.043 127.629 191.582 127.629C192.145 127.629 192.66 127.729 193.129 127.928C193.598 128.127 193.973 128.367 194.254 128.648C194.547 128.918 194.805 129.24 195.027 129.615C195.262 129.99 195.426 130.318 195.52 130.6C195.613 130.881 195.701 131.156 195.783 131.426L195.906 131.848C196.211 131.238 196.598 130.635 197.066 130.037C197.535 129.428 198.133 128.877 198.859 128.385C199.586 127.881 200.301 127.629 201.004 127.629C202.551 127.629 203.781 128.291 204.695 129.615C205.609 130.928 206.066 132.809 206.066 135.258V147H201.531V137.525C201.531 135.615 201.344 134.174 200.969 133.201C200.605 132.229 199.949 131.742 199 131.742C198.051 131.742 197.389 132.229 197.014 133.201C196.65 134.174 196.469 135.615 196.469 137.525V147ZM214.557 154.488H210.021V128.139H214.557V130.881C215.166 129.92 215.963 129.146 216.947 128.561C217.932 127.963 218.934 127.664 219.953 127.664C221.078 127.664 222.074 127.934 222.941 128.473C223.809 129 224.506 129.732 225.033 130.67C225.561 131.596 225.953 132.65 226.211 133.834C226.48 135.006 226.615 136.277 226.615 137.648C226.615 139.02 226.48 140.291 226.211 141.463C225.941 142.623 225.543 143.66 225.016 144.574C224.488 145.477 223.791 146.191 222.924 146.719C222.057 147.234 221.066 147.492 219.953 147.492C218.945 147.492 217.943 147.193 216.947 146.596C215.963 145.986 215.166 145.201 214.557 144.24V154.488ZM222.045 137.561C222.045 136.529 221.934 135.627 221.711 134.854C221.488 134.08 221.189 133.477 220.814 133.043C220.439 132.609 220.041 132.293 219.619 132.094C219.209 131.883 218.775 131.777 218.318 131.777C217.861 131.777 217.416 131.877 216.982 132.076C216.549 132.264 216.133 132.568 215.734 132.99C215.336 133.4 215.014 134.004 214.768 134.801C214.533 135.586 214.416 136.506 214.416 137.561C214.416 138.627 214.533 139.559 214.768 140.355C215.014 141.141 215.336 141.744 215.734 142.166C216.133 142.588 216.549 142.898 216.982 143.098C217.416 143.285 217.861 143.379 218.318 143.379C218.74 143.379 219.162 143.256 219.584 143.01C220.018 142.764 220.422 142.412 220.797 141.955C221.172 141.498 221.471 140.889 221.693 140.127C221.928 139.354 222.045 138.498 222.045 137.561ZM239.693 138.668C239.084 138.082 238.264 137.789 237.232 137.789C236.201 137.789 235.346 138.088 234.666 138.686C233.998 139.271 233.664 139.957 233.664 140.742C233.664 141.527 233.998 142.207 234.666 142.781C235.334 143.355 236.189 143.643 237.232 143.643C238.264 143.643 239.084 143.361 239.693 142.799C240.303 142.225 240.607 141.539 240.607 140.742C240.607 139.945 240.303 139.254 239.693 138.668ZM235.738 133.975C236.898 133.975 237.918 134.273 238.797 134.871C239.676 135.457 240.232 136.125 240.467 136.875V135.434C240.467 134.742 240.367 134.139 240.168 133.623C239.98 133.107 239.74 132.703 239.447 132.41C239.154 132.105 238.803 131.865 238.393 131.689C237.994 131.502 237.613 131.379 237.25 131.32C236.898 131.262 236.523 131.232 236.125 131.232C235.586 131.232 235.053 131.291 234.525 131.408C234.01 131.514 233.629 131.619 233.383 131.725C233.137 131.818 232.785 131.965 232.328 132.164L230.518 129.281C231.045 128.859 231.877 128.479 233.014 128.139C234.15 127.799 235.188 127.629 236.125 127.629C237.086 127.629 237.982 127.723 238.814 127.91C239.658 128.086 240.467 128.391 241.24 128.824C242.014 129.258 242.676 129.803 243.227 130.459C243.777 131.104 244.211 131.924 244.527 132.92C244.855 133.916 245.02 135.041 245.02 136.295V141.639V147H240.502V144.609C240.256 145.359 239.699 146.033 238.832 146.631C237.977 147.217 236.969 147.51 235.809 147.51C234.016 147.51 232.498 146.859 231.256 145.559C230.025 144.258 229.41 142.641 229.41 140.707C229.41 138.773 230.025 137.168 231.256 135.891C232.486 134.613 233.98 133.975 235.738 133.975ZM253.439 147H248.904V128.121H253.439V130.969C253.967 130.008 254.74 129.211 255.76 128.578C256.791 127.945 257.91 127.629 259.117 127.629C259.762 127.629 260.4 127.799 261.033 128.139C261.678 128.467 262.27 128.941 262.809 129.562C263.359 130.172 263.799 130.975 264.127 131.971C264.467 132.967 264.637 134.062 264.637 135.258V147H260.102V137.561C260.102 136.389 260.025 135.41 259.873 134.625C259.732 133.84 259.516 133.248 259.223 132.85C258.93 132.439 258.602 132.158 258.238 132.006C257.887 131.842 257.453 131.76 256.938 131.76C256.527 131.76 256.158 131.807 255.83 131.9C255.514 131.994 255.197 132.17 254.881 132.428C254.576 132.686 254.318 133.025 254.107 133.447C253.908 133.869 253.744 134.432 253.615 135.135C253.498 135.826 253.439 136.641 253.439 137.578V147ZM284.166 147.51C284.166 148.436 283.932 149.367 283.463 150.305C282.994 151.242 282.391 152.062 281.652 152.766C280.914 153.48 280.064 154.061 279.104 154.506C278.154 154.951 277.217 155.174 276.291 155.174C274.545 155.174 273.027 154.764 271.738 153.943C270.461 153.123 269.547 152.121 268.996 150.938L272.582 148.969C272.805 149.602 273.227 150.111 273.848 150.498C274.48 150.896 275.26 151.096 276.186 151.096C277.17 151.096 277.99 150.82 278.646 150.27C279.303 149.719 279.631 148.975 279.631 148.037V144.17C279.104 145.119 278.33 145.916 277.311 146.561C276.303 147.193 275.219 147.51 274.059 147.51C272.324 147.51 270.953 146.672 269.945 144.996C268.938 143.309 268.434 140.842 268.434 137.596V128.139H272.969V137.578C272.969 138.504 273.033 139.324 273.162 140.039C273.303 140.742 273.473 141.305 273.672 141.727C273.883 142.137 274.129 142.471 274.41 142.729C274.703 142.986 274.984 143.162 275.254 143.256C275.535 143.338 275.828 143.379 276.133 143.379C276.449 143.379 276.754 143.332 277.047 143.238C277.34 143.145 277.645 142.969 277.961 142.711C278.277 142.453 278.553 142.119 278.787 141.709C279.033 141.287 279.232 140.725 279.385 140.021C279.537 139.307 279.613 138.486 279.613 137.561V128.139H284.166V146.49V147.51Z" fill="url(#paint0_linear)"/>
                            <path d="M115.318 37.7729C113.836 37.7729 112.636 38.9723 112.636 40.4548C112.636 42.8153 110.209 45.4246 105.952 47.7864C106.814 43.1502 107.255 38.1522 107.266 32.637C107.268 32.5833 107.217 32.1677 107.199 32.0425C107.162 31.6004 107.131 31.1552 106.985 30.7303C102.941 19.1335 55.6478 19 53.6364 19C36.6709 19 3.68758 21.3938 0.324832 30.4555C0.0950383 31.0745 0.000753935 31.7234 0.00728448 32.3733C0.00703331 32.3862 0 32.3964 0 32.4093C0 38.0793 5.05983 42.4583 10.9212 47.5312C18.3695 53.9814 26.8183 61.2938 26.8183 72.6363C26.8183 82.6512 24.3825 86.9098 21.8055 91.4194C19.1203 96.1231 16.3737 101.044 16.1364 111.465C9.35681 108.876 5.36355 105.414 5.36355 102.136C5.36355 99.3155 8.44871 96.2829 13.8334 93.8132C15.1795 93.1952 15.7663 91.6028 15.1481 90.2567C14.5301 88.9053 12.9429 88.3237 11.5914 88.9367C4.117 92.3701 0 97.0581 0 102.136C0 112.837 17.8717 120.909 41.568 120.909C65.2644 120.909 83.1364 112.837 83.1364 102.137C83.1364 100.039 82.4291 97.9828 81.0307 96.0213C80.1716 94.8111 78.4956 94.5363 77.2908 95.3927C76.086 96.2518 75.8031 97.9278 76.6623 99.1326C77.4009 100.167 77.7728 101.178 77.7728 102.137C77.7728 107.281 67.9906 112.898 52.9151 114.839C59.9144 102.447 69.1046 95.0334 78.0399 87.8865C85.8497 81.6429 93.2193 75.7476 98.7139 66.9847C99.2958 66.0524 99.2533 64.8553 98.5987 63.9701C97.944 63.0796 96.7968 62.6868 95.7544 62.9669C85.1269 65.7851 72.4196 67.2728 59.0001 67.2728C52.264 67.2728 45.6275 66.8956 39.2792 66.1492C37.8126 65.9762 36.7597 64.6407 36.9326 63.1714C37.1056 61.6784 38.4517 60.6282 39.913 60.8221C46.0361 61.5424 52.4578 61.9089 59.0001 61.9089C75.9716 61.9089 92.0475 59.389 103.11 54.9994C103.118 54.9981 103.132 55.0168 103.14 55.0132C115.422 50.1366 118 44.4038 118 40.4545C118 38.9723 116.801 37.7729 115.318 37.7729ZM53.6364 35.0909C39.0802 35.0909 28.154 33.8391 20.7739 32.4171C28.2431 30.995 39.2426 29.7274 53.6364 29.7274C68.1926 29.7274 79.1189 30.9792 86.4991 32.4013C79.0299 33.8232 68.0303 35.0909 53.6364 35.0909Z" fill="url(#paint1_linear)"/>
                            <path d="M43.7723 126.355L41.4851 126.407C35.1921 126.407 28.7493 125.761 22.8498 124.541C21.8667 124.332 20.8316 124.718 20.2158 125.529C19.5948 126.341 19.4912 127.437 19.9517 128.351C26.2497 140.932 38.4576 147.185 38.975 147.445C39.3475 147.634 39.7565 147.727 40.16 147.727C40.5794 147.727 40.9932 147.628 41.3762 147.43C42.1319 147.037 42.6493 146.309 42.7787 145.468C43.6171 139.995 44.7865 134.876 46.3651 129.816C46.6187 128.996 46.4634 128.103 45.951 127.417C45.4336 126.729 44.5433 126.313 43.7723 126.355Z" fill="url(#paint2_linear)"/>
                            <defs>
                            <linearGradient id="paint0_linear" x1="214.75" y1="164.565" x2="214.75" y2="7.0677e-06" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#00CFAA"/>
                            <stop offset="1" stop-color="#00F4FF"/>
                            </linearGradient>
                            <linearGradient id="paint1_linear" x1="58.9999" y1="19" x2="58.9999" y2="120.909" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#16FFAB"/>
                            <stop offset="1" stop-color="#00ADB5"/>
                            </linearGradient>
                            <linearGradient id="paint2_linear" x1="33.0755" y1="124.485" x2="33.0755" y2="147.727" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#16FFAB"/>
                            <stop offset="1" stop-color="#00ADB5"/>
                            </linearGradient>
                            </defs>
                            </svg>
                        </Footer.Logo>                       
                    </Footer.Column>
                    <Footer.Column>
                        <Footer.Title>
                            Pages
                        </Footer.Title>
                        <Footer.Link href="#">Request a torrent</Footer.Link>
                        <Footer.Link href="#">DMCA take-down</Footer.Link>
                        <Footer.Link href="#">Browse Torrent</Footer.Link>
                        <Footer.Link href="#">Some other links</Footer.Link>
                    </Footer.Column>
                    <Footer.Column>
                        <Footer.Title>
                            About Us
                        </Footer.Title>
                        <Footer.Para>
                        Long string text. Long string text. Long string text. Long string text. Long string text.</Footer.Para>
                        <Footer.Para>
                        Long string text. Long string text. Long string text. Long string text. Long string text. Long string text.
                        </Footer.Para>
                    </Footer.Column>
                </Footer.Row>                        
            </Footer.Wrapper>
            <Footer.Copyright>
                Copyright 2021  &copy;The Torrent Company
            </Footer.Copyright>
        </Footer>
    )
}