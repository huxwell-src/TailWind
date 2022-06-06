

	<footer class="bg-bookmark-blue py-8">
      <div class="container flex flex-col md:flex-row items-center">
        <div class="flex flex-1 flex-wrap items-center justify-center md:justify-start gap-12">
          <img src="./imgs/logo-bookmark-white.png" alt="" />
          <ul class="flex text-white uppercase gap-12 text-xs">
			<?php
					wp_nav_menu(
						array(
							'container_id'    => 'primary-menu',
							'container_class' => 'hidden bg-gray-100 mt-4 p-4 lg:mt-0 lg:p-0 lg:bg-transparent lg:block',
							'menu_class'      => 'lg:flex lg:-mx-4',
							'theme_location'  => 'primary',
							'li_class'        => 'lg:mx-4',
							'fallback_cb'     => false,
						)
					);
				?>
          </ul>
        </div>
        <div class="flex gap-10 mt-12 md:mt-0">
          <li><i class="text-white text-2xl fab fa-twitter"></i></li>
          <li><i class="text-white text-2xl fab fa-facebook-square"></i></li>
        </div>
      </div>
    </footer>

<?php wp_footer(); ?>

</body>
</html>
