import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Newsletter = () => {
  const { t } = useTranslation();
  const [error, setError] = useState('');
  const [isModalOpen, setModalOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = formData.get('email')?.toString().trim();
    if (!email) {
      setError(t('newsletter.form.emptyFieldError'));
      return;
    }
    const emailRegex = /^[\w-.]+@[\w-]+(\.[\w-]+)*\.[a-z]{2,}$/;
    if (!emailRegex.test(email)) {
      setError(t('newsletter.form.invalidFieldError'));
      return;
    }

    setError('');
    e.currentTarget.reset();
    setModalOpen(true);
  };

  return (
    <section
      id="newsletter"
      aria-labelledby="newsletter-title"
      aria-describedby="newsletter-description"
      className="bg-black min-h-screen bg-no-repeat bg-cover bg-center text-center text-white justify-center flex items-center">
      <div className="c flex flex-col gap-y-[45px] md:w-1/2">
        <div className="flex flex-col gap-y-2.5 font-accent leading-none">
          <h3 className="text-[18px] md:text-[24px]">{t('newsletter.subtitle')}</h3>
          <h2 id="newsletter-title" className="text-[33px] md:text-[56px]">
            {t('newsletter.title')}
          </h2>
        </div>
        <p id="newsletter-description" className="text-[14px] md:text-[18px]">
          {t('newsletter.text')}
        </p>
        <form className="w-full" noValidate onSubmit={handleSubmit}>
          <fieldset className="flex w-full flex-col gap-y-2">
            <legend id="newsletter-heading" className="sr-only">
              {t('newsletter.title')}
            </legend>

            <label htmlFor="newsletter-email" className="sr-only">
              {t('newsletter.form.emailPlaceholder')}
            </label>
            <div className="grid grid-cols-[6fr_4fr] gap-x-3 w-full">
              <input
                type="email"
                id="newsletter-email"
                name="email"
                required
                aria-required="true"
                aria-invalid={!!error}
                aria-describedby={error ? 'newsletter-error' : undefined}
                placeholder={t('newsletter.form.emailPlaceholder')}
                className={`text-[18px] border-2 rounded bg-dark text-orange p-5 placeholder:text-white placeholder:opacity-50 ${
                  error ? 'border-red-500' : 'border-dark'
                }`}
              />

              <button
                type="submit"
                className="cursor-pointer text-dark hover:text-white bg-orange md:p-[15px] p-[5px] text-[12px] sm:text-[14px] md:text-[16px] font-bold rounded hover:bg-transparent border-orange border transition-colors">
                {t('newsletter.form.submit')}
              </button>
            </div>
            <p
              id="newsletter-error"
              role="alert"
              aria-live="polite"
              className="min-h-[30px] text-red-500">
              {error}
            </p>
          </fieldset>
        </form>
      </div>
      <Dialog open={isModalOpen} onOpenChange={setModalOpen}>
        <DialogContent className="bg-dark text-white">
          <DialogHeader>
            <DialogTitle className="text-green-400 text-center mb-4">
              {t('newsletter.success.title')}
            </DialogTitle>
            <DialogDescription className="text-xl">
              {t('newsletter.success.message')}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <button
              type="button"
              className="cursor-pointer text-dark hover:text-white bg-orange p-[5px] text-[12px] sm:text-[14px] md:text-[16px] font-bold rounded hover:bg-transparent border-orange border transition-colors"
              onClick={() => setModalOpen(false)}
              autoFocus>
              {t('newsletter.success.button')}
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Newsletter;
