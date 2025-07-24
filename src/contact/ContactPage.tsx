import AppGrid from '@/components/AppGrid';
import Container from '@/components/Container';
import { clsx } from 'clsx/lite';
import { META_TITLE } from '@/app/config';

export default function ContactPage() {
  return (
    <AppGrid
      contentMain={
        <Container className="max-w-2xl">
          <div className={clsx(
            'space-y-8',
            'py-8 md:py-12',
          )}>
            <div className="space-y-4">
              <h1 className={clsx(
                'text-3xl md:text-4xl font-bold',
                'text-main',
              )}>
                Contact
              </h1>
              <p className={clsx(
                'text-lg text-dim',
                'leading-relaxed',
              )}>
                Get in touch with me to collaborate on projects requiring photography, videography and music production.
              </p>
            </div>

            <div className="space-y-6">
              <div className={clsx(
                'p-6 md:p-8',
                'bg-gray-50 dark:bg-gray-900/50',
                'border border-gray-200 dark:border-gray-800',
                'rounded-lg',
              )}>
                <h2 className={clsx(
                  'text-xl font-semibold mb-4',
                  'text-main',
                )}>
                  Let's Connect
                </h2>
                <div className="space-y-4 text-dim">
                  <p>
                    I'm always looking to work with people on new projects, and increase the number of photos on this site.
                  </p>
                  <p>
                    You can contact me through any of the following channels:
                  </p>
                </div>
              </div>

              <div className="grid gap-4 md:gap-6">
                <div className={clsx(
                  'p-4 md:p-6',
                  'border border-gray-200 dark:border-gray-800',
                  'rounded-lg',
                  'hover:bg-gray-50 dark:hover:bg-gray-900/50',
                  'transition-colors',
                )}>
                  <h3 className="font-medium text-main mb-2">Email</h3>
                  <a 
                    href="mailto:photos@aodhain.ie"
                    className={clsx(
                      'text-blue-600 dark:text-blue-400',
                      'hover:underline',
                    )}
                  >
                    photos@aodhain.ie
                  </a>
                  <br/>
                  <a 
                    href="mailto:videos@aodhain.ie"
                    className={clsx(
                      'text-blue-600 dark:text-blue-400',
                      'hover:underline',
                    )}
                  >
                    videos@aodhain.ie
                  </a>
                  <br/>
                  <a 
                    href="mailto:me@aodhain.ie"
                    className={clsx(
                      'text-blue-600 dark:text-blue-400',
                      'hover:underline',
                    )}
                  >
                    me@aodhain.ie
                  </a>
                </div>

                <div className={clsx(
                  'p-4 md:p-6',
                  'border border-gray-200 dark:border-gray-800',
                  'rounded-lg',
                  'hover:bg-gray-50 dark:hover:bg-gray-900/50',
                  'transition-colors',
                )}>
                  <h3 className="font-medium text-main mb-2">Social Media</h3>
                  <div className="space-y-2">
                    <div>
                      <a 
                        href="https://instagram.com/aidanpostscringe"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={clsx(
                          'text-blue-600 dark:text-blue-400',
                          'hover:underline',
                        )}
                      >
                        Instagram @aidanpostscringe
                      </a>
                    </div>
                  </div>
                </div>

                <div className={clsx(
                  'p-4 md:p-6',
                  'border border-gray-200 dark:border-gray-800',
                  'rounded-lg',
                )}>
                  <h3 className="font-medium text-main mb-2">Response Time</h3>
                  <p className="text-dim">
                    I typically respond to messages within 24-48 hours. 
                    Thank you for your patience!
                  </p>
                </div>
              </div>

              <div className={clsx(
                'text-center text-sm text-dim',
                'pt-4 border-t border-gray-200 dark:border-gray-800',
              )}>
                <p>
                  Looking forward to getting in touch.
                </p>
              </div>
            </div>
          </div>
        </Container>
      }
    />
  );
}
