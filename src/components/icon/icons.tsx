import {
    Beer,
    BeerIcon,
    Coffee,
    LucideProps,
    Moon,
    SunMedium,
    Twitter,
    type Icon as LucideIcon,
} from 'lucide-react'

export type Icon = typeof LucideIcon

export const Icons = {
    sun: SunMedium,
    moon: Moon,
    twitter: Twitter,
    logo: (props: LucideProps) => (
        <svg
            {...props}
            width="34"
            height="46"
            viewBox="0 0 40 51"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs />
            <path
                id="path"
                d="M19.83 50.5L39.5 7.42L20.33 0.5L0.5 7.42L19.83 50.5ZM0.5 7.42L6.01 9.82L19.83 15.2L19.89 30.43L19.83 43.79C19.83 43.79 19.73 44.74 19.83 44.74C19.92 44.74 20.2 43.79 20.2 43.79L34.41 9.82L20.33 4.73L6.01 9.82"
                stroke="#CFCFCF"
                strokeOpacity="1.000000"
                strokeWidth="1.000000"
            />
        </svg>
    ),
    discord: (props: LucideProps) => (
        <svg
            {...props}
            width="24"
            height="24"
            viewBox="0 0 36 36"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M30.4963 6.786C28.1313 5.702 25.6342 4.93342 23.069 4.5C22.7176 5.12764 22.3999 5.77355 22.1173 6.435C19.3847 6.02341 16.6059 6.02341 13.8733 6.435C13.5914 5.7736 13.2744 5.12769 12.9238 4.5C10.3573 4.93929 7.85848 5.70919 5.48978 6.7905C0.789533 13.743 -0.483967 20.5268 0.152783 27.2115C2.90488 29.2459 5.98555 30.793 9.26078 31.7858C9.99642 30.7919 10.6489 29.7391 11.2115 28.638C10.1467 28.2402 9.11896 27.7493 8.14028 27.171C8.39978 26.982 8.65103 26.7938 8.89403 26.6063C11.7427 27.9459 14.8519 28.6404 17.9998 28.6404C21.1477 28.6404 24.2569 27.9459 27.1055 26.6063C27.353 26.8103 27.6043 26.9985 27.8593 27.171C26.8781 27.7501 25.8482 28.2425 24.7813 28.6425C25.3415 29.7428 25.9941 30.7936 26.732 31.7835C30.0092 30.7936 33.0922 29.2487 35.8468 27.216C36.5938 19.4625 34.571 12.7418 30.4963 6.786ZM12.017 23.0985C10.2418 23.0985 8.77703 21.4898 8.77703 19.5075C8.77703 17.5253 10.1923 15.9008 12.0148 15.9008C13.8373 15.9008 15.2908 17.5253 15.2593 19.5075C15.2278 21.4875 13.8283 23.1008 12.0193 23.1008M23.9803 23.1008C22.2028 23.1008 20.7403 21.492 20.7403 19.5098C20.7403 17.5275 22.1578 15.903 23.9803 15.903C25.8028 15.903 27.2473 17.5275 27.2158 19.5098C27.1843 21.4898 25.7893 23.1008 23.9803 23.1008Z"
                fill="currentColor"
            />
        </svg>
    ),
    gitHub: (props: LucideProps) => (
        <svg viewBox="0 0 438.549 438.549" {...props}>
            <path
                fill="currentColor"
                d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
            ></path>
        </svg>
    ),
}
