import React from "react";
import { useForm } from 'react-hook-form';
import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import Button from '~/layouts/components/Button/Button';

const cx = classNames.bind(styles);

function Login(){
    
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const handleLogin = (data) => console.log(data);

    return(
        <div class="h-full w-full bg-gray-900 p-6 ">
        <div className={cx('container')}>
        <div className={cx('rows')}>
            <div
                className={cx('col-md-4', 'col-md-offset-4', 'bg-white')}
                style={{ margin: '0 auto', backgroundColor: 'white' }}
            >
                <div className={cx('form-login', 'ng-pristine', 'ng-valid')}>
                    <form  onSubmit={handleSubmit(handleLogin)}>
                        <center>
                            <h2 className={cx('heading-title heading-line-bottom ')}>Đăng nhập tài khoản</h2>
                        </center>
                        <center>
                            <p className={cx('text-error', 'font-size-14', 'text-center', 'text-c-red')}>
                                {/* {auth.error} */}
                            </p>
                        </center>
                        <div>
                            <input
                                className={cx(
                                    'form-control-none-radius ng-pristine ng-untouched ng-valid ng-empty ',
                                )}
                                placeholder="Email"
                                ng-model="email"
                                name="email"
                                {...register('email', {
                                    required: true,
                                    pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,                                                          
                                })}
                            ></input>
                             <div className={cx('error')}>
                                        <error className={cx('text-error')}>
                                            {errors.email?.type === 'required' && 'Email là bắt buộc'}
                                            {errors.email?.type === 'pattern' && 'Email sai định dạng'}
                                        </error>
                                    </div>
                          </div>
                          <div>
                            <input
                                className={cx(
                                    'form-control-none-radius ng-pristine ng-untouched ng-valid ng-empty ',
                                )}
                                placeholder="Mật khẩu"
                                type="password"
                                ng-model="pass"
                                name="password"
                                {...register('password', {
                                    required: true,
                                    minLength: 3,
                                    maxLength: 20,
                                })}
                            ></input>
                            <div className={cx('error')}>
                                <error className={cx('text-error')}>
                                    {errors.password?.type === 'required' && 'Mật khẩu là bắt buộc'}
                                    {errors.password?.type === 'minLength' && 'Mật khẩu không nhỏ hơn 3 ký tự'}
                                    {errors.password?.type === 'maxLength' && 'Mật khẩu không lớn hơn 20 ký tự'}
                                </error>
                            </div>
                            {/* // eslint-disable-next-line jsx-a11y/anchor-is-valid, jsx-a11y/anchor-is-valid,
                    jsx-a11y/anchor-is-valid */}
                            <button
                                type="submit"
                                className={cx('btn btn-lg btn-block btn-phone ')}
                                style={{
                                    backgroundColor: 'dimgray',
                                    height: '40px',
                                    marginBottom: '20px',
                                }}
                            >
                                <i className="fas fa-phone"></i> Đăng nhập
                            </button>
                        </div>
                        <div className={cx('forgot-span')}
                        >
                            <Button to="/forgotPassword" className={cx('text-forgot')}>
                                Quên mật khẩu?
                            </Button>
                        </div>
                        <div className={cx('register-span')}>
                            <span> Bạn chưa có tài khoản? </span>
                            <Button to="/register" className={cx('text-register')}>
                                Đăng Ký
                            </Button>
                        </div>

                        <div className={cx('hr-empty')}></div>
                        <button
                            href="#"
                            className={cx('btn btn-lg btn-block btn-facebook')}
                            style={{
                                backgroundColor: '#3C5A99',
                                height: '40px',
                                marginBottom: '10px',
                            }}
                        >
                        
                            <i className="fab fa-facebook-f"></i> Đăng nhập <b>Facebook</b>
                        </button>
                    </form>
                    <button
                        className={cx('btn btn-lg btn-block btn-google')}
                        style={{
                            backgroundColor: '#DB4437',
                            height: '40px',
                        }}
                    >
                        <i className="fab fa-google"></i> Đăng nhập <b>Google</b>
                    </button>
                   
  
                </div>
            </div>
        </div>
    </div>
    </div>
    )
}

export default Login;